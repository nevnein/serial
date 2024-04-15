#include <FastLED.h>

// Definizione delle costanti
#define NUM_LEDS 1056
const int LEDS_PER_QUARTIERE = 12;
const int LEDS_PER_DATO = 2;
#define LED_PIN 13
#define MAX_BRIGHTNESS 125
// Definizione dei colori
#define WHITE CRGB::White
#define RED CRGB::Red
#define GREEN CRGB::Green
#define BLUE CRGB::Blue
#define YELLOW CRGB::Yellow
#define ORANGE CRGB::Orange
#define PURPLE CRGB::Purple
// Definizione della matrice dei LED
CRGB leds[NUM_LEDS];
CRGB coloriDati[6] = {RED, GREEN, WHITE, BLUE, PURPLE, ORANGE};

// Stato corrente delle istruzioni
int istruzioneRicevuta[12] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
// Stato precedente delle istruzioni
int istruzionePrecedente[12] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

void setup()
{
  Serial.begin(9600);
  // Inizializzazione dei LED
  FastLED.addLeds<NEOPIXEL, LED_PIN>(leds, NUM_LEDS);
  // Imposta la luminosità massima
  FastLED.setBrightness(MAX_BRIGHTNESS);
  // Spegni tutti i LED all'avvio
  FastLED.clear();
  FastLED.show();
}

void loop()
{
  if (Serial.available() > 0)
  {
    String input = Serial.readStringUntil('\n');
    stringToNumbersArray(input, istruzioneRicevuta, 12);
    // Zero spegne tutto
    if (istruzioneRicevuta[0] == 0)
    {
      FastLED.clear();
    }
    // 255 accende tutto
    else if (istruzioneRicevuta[0] == 255)
    {
      fill_solid(leds, NUM_LEDS, CRGB::White);
    }
    // Caso normale
    else
    {
      // Cicla tra i quartieri nelle istruzioni
      for (int i = 0; i < 6; i++)
      {
        // Confronta le istruzioni precedenti con quelle ricevute
        // Abbiamo bisogno di due loop perché la posizione potrebbe essere cambiata
        // Quindi dobbiamo confrontare l'i-esimo dato vecchio con il primo nuovo, il secondo nuovo, ecc...
        bool trovato = false;
        for (int j = 0; j < 6; j++)
        {
          if (istruzionePrecedente[i] == istruzioneRicevuta[j])
          {
            trovato = true;
            break;
          }
        }
        if (!trovato)
        {
          // L'i-esimo quartiere precedente non è stato trovato tra i correnti, spegnilo
          coloraQuartiere(istruzionePrecedente[i], CRGB::Black);
        }

        if (istruzioneRicevuta[i] == 0)
        {
          // 0 indica che l'i-esimo quartiere non è presente
          // ovvero l'utente ne ha selezionati meno di 6,
          // nulla da fare
          break;
        }

        // Gestisci le nuove tipologie di dato arrivate
        for (int j = 6; j < 12; j++)
        {
          if (trovato && istruzionePrecedente[j] == istruzioneRicevuta[j])
          {
            // Il quartiere era già selezionato e il dato non è cambiato,
            // nulla da fare, i led sono già accesi/spenti
            break;
          }

          // l'istruzione per il dato può essere 0 (spento) o 1 (acceso)
          if (istruzioneRicevuta[j] == 0)
          {
            coloraDatoInQuartiere(istruzioneRicevuta[i], j - 6, CRGB::Black);
          }
          else if (istruzioneRicevuta[j] == 1)
          {
            coloraDatoInQuartiere(istruzioneRicevuta[i], j - 6, coloriDati[j - 6]);
          }
        }
      }
    }
    // Salva le attuali istruzioni per confrontarle con le successive
    for (int i = 0; i < 12; i++)
    {
      istruzionePrecedente[i] = istruzioneRicevuta[i];
    }

    // Mostra i cambiamenti nei led
    FastLED.show();
  }
}

void coloraQuartiere(int quartiere, CRGB colore)
{
  int led_start = (quartiere - 1) * LEDS_PER_QUARTIERE;
  int led_end = quartiere * LEDS_PER_QUARTIERE;

  for (int i = led_start; i < led_end; i++)
  {
    leds[i] = colore;
  }
}

void coloraDatoInQuartiere(int quartiere, int dato, CRGB colore)
{
  int led_start = (quartiere - 1) * LEDS_PER_QUARTIERE + (dato - 1) * LEDS_PER_DATO;
  int led_end = (quartiere - 1) * LEDS_PER_QUARTIERE + dato * LEDS_PER_DATO;

  for (int i = led_start; i < led_end; i++)
  {
    leds[i] = colore;
  }
}

void stringToNumbersArray(String inputString, int numbersArray[], int arraySize)
{
  int currentIndex = 0;
  String currentNumber = "";

  for (int i = 0; i < inputString.length(); i++)
  {
    char currentChar = inputString.charAt(i);

    if (currentChar != ',')
    {
      currentNumber += currentChar;
    }
    else
    {
      numbersArray[currentIndex] = currentNumber.toInt();
      currentIndex++;
      currentNumber = "";
    }
  }

  // Add the last number after the last comma
  numbersArray[currentIndex] = currentNumber.toInt();
}