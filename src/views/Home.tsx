import { useState } from "react";
import municipi from "../data/municipi.json";
import { useMainContext } from "../context/MainContext";
import { Button } from "../components/Button";

const alphabeticallySortMunicipi = [...municipi].sort((a, b) =>
  a["NIL - Name"].localeCompare(b["NIL - Name"])
);

export const Home = () => {
  const [view, setView] = useState<"list" | "map">("list");
  const [selected, setSelected] = useState<number[]>([]);
  const { setInspected } = useMainContext();

  const toggleId = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      if (selected.length <= 4) {
        setSelected([...selected, id]);
      }
    }
  };

  const inspectSelected = () => {
    if (selected.length) {
      setSelected([]);
      setInspected(selected);
    }
  };
  return (
    <>
      <div className="w-[1526px] flex gap-2">
        <Button active={view === "map"} onClick={() => setView("map")}>
          Mappa
        </Button>
        <Button active={view === "list"} onClick={() => setView("list")}>
          Lista
        </Button>
      </div>
      <div className="w-[1526px] mx-auto flex flex-wrap gap-1">
        {view === "map" ? (
          <div className="h-[560px] w-[1526px]">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 4996.1 4372.1"
              className="w-full h-full"
            >
              <path
                id="NIL_23"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4809.5,1779.8l44-132.9-6.1-184.4-605.2-32.1-58,55,61.6,454.1,48.5,25.9,515.2-185.6Z"
              />
              <path
                id="NIL_25"
                className="stroke-white hover:fill-slate-600 cursor-pointer "
                strokeWidth="6"
                d="M4235.4,2347.4l51.9-55.1-18-293.4-43.9-27-351.3,4.5-48.3,50.4,62.8,280,346.9,40.5Z"
              />
              <path
                id="NIL_76"
                className="stroke-white hover:fill-slate-600 cursor-pointer "
                strokeWidth="6"
                d="M2319.1,751.7l-108-410.1-82.5-79.5-209.6,323.2,40.4,331.7,297.6-54.4,62.1-111Z"
              />
              <path
                id="NIL_50"
                className="stroke-white hover:fill-slate-600 cursor-pointer "
                strokeWidth="6"
                d="M2604.8,1679.9l-20.5-39.8-238.6,43.5,89.8,233.2,169.2-237Z"
              />
              <path
                id="NIL_2"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3016.2,1706.9l1.6,279.2,222.9,22.2-6.4-260.3-218.1-41.2Z"
              />
              <path
                id="NIL_22"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4220.4,1939.3l-58.8-441.5-293.4,117.9,8,335.2,344.2-11.6Z"
              />
              <path
                id="NIL_79"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2740.3,1073.7l284,97.7,73.2-46.9,70.3-262.4-115.3-101.9-285.5,114.5-26.7,199Z"
              />
              <path
                id="NIL_19"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4158,799.8l-283.5,153-18.8,138.7,332,245.5,134.2-413.4-163.9-123.9Z"
              />
              <path
                id="NIL_35"
                className="stroke-white hover:fill-slate-600 cursor-pointer "
                strokeWidth="6"
                d="M4062.6,3310.5l53.5-97.3-1.2-413.5-18.2-36.6-178.4-12-114.3,70.2-83.2,370.4,87.5,188.7,254.3-69.9Z"
              />
              <path
                id="NIL_34"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3950.8,4021.7l245.3-114.2,227.7-348-339.6-229.5-278.4,86.2-21.6,55.7,86.7,416.7,79.8,133Z"
              />
              <path
                id="NIL_48"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2167.5,3132.8l112.4-194.8-49.9-133.4-425.8,12.5-224.7,213,135,195.5,453-92.7Z"
              />
              <path
                id="NIL_81"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2647.9,457l-402.3-101.3,92.8,387.9,236-25,73.4-261.6Z"
              />
              <path
                id="NIL_84"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3411.6,102.2l-305.1-53-241,357.6,192.3,180.5,336.1-385.1,17.8-100Z"
              />
              <path
                id="NIL_20"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4159,1462.4l47.8-55.8-26.8-39.1-338.3-259-200.1,130.4,71.9,290.1,145.9,59.9,299.6-126.5Z"
              />
              <path
                id="NIL_11"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3335.8,1318.7l-227.4-164.7-68.6,39.6-68.3,229.1,37,49.7,290.1-29.5,37.2-124.3Z"
              />
              <path
                id="NIL_61"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1669.3,1936l-169.6-370.9-189.8,37.2-143.5,360,122,128.1,381-154.3Z"
              />
              <path
                id="NIL_60"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1564.2,1467l-49.1,91.1,186.4,370.2,93.5,36,195.1-273.7-234-293.3-191.9,69.7Z"
              />
              <path
                id="NIL_1"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3236.1,2325.1l24.8-273.1-19.4-24.8-227.9-17.8-77.8,59.5-13.6,251.8,160.4,62.5,153.6-58Z"
              />
              <path
                id="NIL_4"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3280.6,2050.4l-27.6,275.5,103.9,71.2,150.9-43.3,63.3-325.6-17.6-22.7-272.8,44.9Z"
              />
              <path
                id="NIL_82"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2606.7,81.4l-400.9,38.2-91.7,2.4,20.8,99.1,98.3,100,424.2,115.9,68.9-43.6-119.7-312Z"
              />
              <path
                id="NIL_78"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2957.3,1418.2l58.8-228.4-280.8-99.7-57.4,55.8,91.8,244.2,187.6,28.1Z"
              />
              <path
                id="NIL_66"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2196.3,1605.3l33.3-236-346.7-183.3-107.3,191.9,234.1,293.9,88.8,10.4,97.8-77Z"
              />
              <path
                id="NIL_75"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1936.1,924.8l-52.8-319.5-304.7-56.7-38.8,87.8,339.5,324.4,56.8-36Z"
              />
              <path
                id="NIL_47"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2237.1,3851.3l58.1,43.1,422.4-425.4-74.4-188.2-306.2,43-100,527.5Z"
              />
              <path
                id="NIL_39"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3291.6,4290.8l600.3-243.1-57.5-132.4-596.8-14.3,54.1,389.8Z"
              />
              <path
                id="NIL_8"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2752.8,1959.6l172.4,86.3,72.3-58.2,2.5-284.6-24.8-24.8-228.1,77,5.7,204.3Z"
              />
              <path
                id="NIL_71"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2240.5,1349.7l129.2-52.2,52.1-139.5-158.2-270.6-304.3,54.8-58.2,46.7-35.6,78.1,24.2,100.2,350.6,182.6Z"
              />
              <path
                id="NIL_14"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3398.8,240.9l-326.8,366.9-.8,137.4,111.6,98.7,153.7-3.2,160-145.4-97.6-454.3Z"
              />
              <path
                id="NIL_32"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4454.3,3512.8l217-323,33.3-156.9-90-18.5-465.5,212.9-44.3,91.2,349.4,194.2Z"
              />
              <path
                id="NIL_27"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3509.1,2379.9l-146.7,39.9-23.3,270.5,86.7,80,205.2-62.8-37.2-268.5-84.7-59Z"
              />
              <path
                id="NIL_30"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4250.4,2374.8l-132.3,363.6,21.2,37.8,344.5,50,3.8-423.5-169.2-85.5-68,57.6Z"
              />
              <path
                id="NIL_15"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3973,275.5l-503.3-158.6-46.8,91.1,95.4,481,177.3,27.2,277.4-440.7Z"
              />
              <path
                id="NIL_44"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2724.8,2841.3l135.9-130.8-68.4-277-222.4,211,154.9,196.8Z"
              />
              <path
                id="NIL_28"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3902.8,2724.4l-56.6-357.3-230.9,69.4,38.9,272.3,134.3,82.5,114.2-66.9Z"
              />
              <path
                id="NIL_74"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2075.6,117l-475.5-38.1-18.1,433.7,313.3,47.5,220.6-322.3-40.2-120.8Z"
              />
              <path
                id="NIL_31"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4712.9,2987.3l96.7-514.8-8.2-151.4-281.6,81.4-2.8,437.8,122.1,150.6,73.9-3.7Z"
              />
              <path
                id="NIL_56"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1790.7,2295.9l52-179.2-58.4-126.2-97.1-26.6-388.3,156.9,47.9,313.9,443.9-138.8Z"
              />
              <path
                id="NIL_70"
                className="stroke-white hover:fill-slate-600 cursor-pointer "
                strokeWidth="6"
                d="M2391.6,1308.4l211.6,209,144.3-120.7-87.2-245.2-213.8,23.3-54.9,133.6Z"
              />
              <path
                id="NIL_52"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2299.2,2426.6l-73.6-304.6-354.1,1.8-43.7,171.1,102.2,151.5,330.9,48.7,38.4-68.6Z"
              />
              <path
                id="NIL_5"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3319.3,2687l26.3-269.2-103.7-69.5-147.5,59.3,19,295.3,205.9-15.8Z"
              />
              <path
                id="NIL_36"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3643.1,2731l-214.8,58.6-31.5,220.5,298.1,156.1,81-346.3-132.8-88.8Z"
              />
              <path
                id="NIL_24"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4803.2,2279.2l4.4-458.3-509.6,165.7,20.5,307.2,188.7,74.2,296-88.8Z"
              />
              <path
                id="NIL_3"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3380.7,1641.7l-122.6,103.3-1.2,265.2,24.4,20.7,267.1-46.3-55.1-296.6-112.6-46.3Z"
              />
              <path
                id="NIL_9"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3300.2,1462.4l-290.2,24.8-18.6,174.3,24.1,24.7,226.6,37.2,127.4-95.5-69.3-165.5Z"
              />
              <path
                id="NIL_80"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3044.3,746.3l-8.5-123.6-193.2-191.2-103.2-15.4-58.4,46.8-80.2,261.6,158,128.5,285.7-106.7Z"
              />
              <path
                id="NIL_21"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3839,1621.3l-133.5-64.7-191.7,125.9,54.2,300.3,21.7,22.5,210.8,1.6,48.4-53.5-9.9-332Z"
              />
              <path
                id="NIL_10"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3691.5,1533.3l-68.3-286.1-92-26.4-167.9,102.4-40.3,129.5,61.9,171.2,117,35.4,189.6-126Z"
              />
              <path
                id="NIL_77"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2578.6,745l-236,32.6-54.7,99.1,152.4,270.6,217.2-16.2,59.6-60.5,19.9-196.8-158.4-128.9Z"
              />
              <path
                id="NIL_7"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2904.8,2320.7l14.6-254.1-176.4-86.9-155.7,94.5,44.9,202.5,168.9,104,103.7-60.1Z"
              />
              <path
                id="NIL_86"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1731.4,3252.5l113,222.7,365.3,347,98.3-506.5-138.4-160.8-438.2,97.6Z"
              />
              <path
                id="NIL_68"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2730.4,1960.4l-6.2-205.3-105.9-63.1-176.3,245.7-8.7,64.4,141.5,54.4,155.6-96.1Z"
              />
              <path
                id="NIL_17"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4918.7,805.9l-95.2-258.9-492.8-212.3-188.6-22.1,33.6,444.8,185.4,143.6,557.7-95.1Z"
              />
              <path
                id="NIL_53"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1242.3,2708.4l160.7,92,158.5,201.1,221-205.9,116.6-330.3-104.4-148.2-450.6,155.8-101.8,235.4Z"
              />
              <path
                id="NIL_51"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2423.6,2020.7l-141.4,40.6-29.9,57.6,68.3,294.1,280.3-132.9-33.4-203.8-143.9-55.6Z"
              />
              <path
                id="NIL_58"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2320.7,1683.2l-120.4-59-76.4,74,155.8,330.4,135-26.7,8.5-64.2-102.4-254.5Z"
              />
              <path
                id="NIL_29"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4096,2733.8l126.8-358.1-331.4-48.4-28.2,33.7,59.5,361.2,173.3,11.7Z"
              />
              <path
                id="NIL_33"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4151.4,3193.8l437.2-196.3-95.7-132.6-352.9-59.2,11.5,388Z"
              />
              <path
                id="NIL_41"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2311.5,3911.5l164.5,235.1,65.8-7.4,530.1-388.9,6-173.3-331.8-90-434.6,424.5Z"
              />
              <path
                id="NIL_40"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2582.5,4153.4l524.2,218.5,134.9-59.1-51.8-422.8-103.7-110.1-503.6,373.4Z"
              />
              <path
                id="NIL_65"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1339.5,983.4l211.5,446.4,195.4-65.8,111.8-196.7-38.6-87.1-480.1-96.8Z"
              />
              <path
                id="NIL_72"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1177.4,839.9l136.5,104.8,515.5,108.6,35.5-75.5-351-322.3-336.5,184.3Z"
              />
              <path
                id="NIL_42"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3152.7,3140.5l-69.1-75.4-349.5-54.3-37.4,23.5-29.9,229.7,90.7,196.3,334.7,88.1,49.4-45.5,11.1-362.3Z"
              />
              <path
                id="NIL_26"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3594.5,2033.9l-63.9,321.2,76.3,59.7,236.4-74,20.4-34.9-62.2-277.1-207,5.1Z"
              />
              <path
                id="NIL_83"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2845.9,393.4l233.9-350.9L2989.3.1l-358,78.9,118.1,305.8,96.6,8.6Z"
              />
              <path
                id="NIL_6"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3073.4,2407.1l-159.2-65.5-97.4,53.8-8,22.1,74.4,285.1,191.3,32.7,20.9-31.9-21.9-296.3Z"
              />
              <path
                id="NIL_45"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2263.2,2792.1l48.3,138.5,356.7,76.2,42.3-22.2,4-125.4-174.9-201.7-209.1-38.9-67.4,173.6Z"
              />
              <path
                id="NIL_46"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2307.5,2952l-100.6,183.4,129.1,158,303.8-39.6,30.5-224.1-362.9-77.8Z"
              />
              <path
                id="NIL_69"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2988.1,1486.4l-34-49.7-188.1-21.1-148.6,121.9-15.1,84.6,26.6,49.3,110.8,65.2,230.9-79.7,17.4-170.5Z"
              />
              <path
                id="NIL_67"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2380.5,1320.7l-127.5,52.8-34.9,230.7,113.3,58.5,252-40.6,9.6-91.1-212.6-210.3Z"
              />
              <path
                id="NIL_73"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1570.1,72.9l-189.2-46.1-195.3,113.6-61.1,399.5-131.4,186.2-99,21.3,113,90,143.2-10.3,342.2-199.3,65-113.1,12.5-441.7Z"
              />
              <path
                id="NIL_64"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1021.9,869.5l20.8,345.2,199.9,305.6,73.7,54.3,173.7-39.8,45.2-94.6-240.5-470.4-148.9-115.9-123.9,15.6Z"
              />
              <path
                id="NIL_57"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2223.7,2098.2l38-56.6-158.5-331.4h-91.5c0,0-193.8,270.5-193.8,270.5l51.3,123.7,354.4-6.2Z"
              />
              <path
                id="NIL_85"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3743.9,3478.6l-563.5,44.6-58.8,54.7-6.8,153.8,113.8,131.6,595.7,15-80.3-399.7Z"
              />
              <path
                id="NIL_38"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3749.1,3448.1l25.3-51.1-79.6-191.9-314.3-173.7-188.9,117.6-8.5,338.1,565.9-39Z"
              />
              <path
                id="NIL_12"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3117.1,1133.3l232.5,170.6,147.9-99.8-159.6-332.7-153.2-3-67.6,264.9Z"
              />
              <path
                id="NIL_13"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3630.8,1215.1l188.6-133.4,15.5-130.9-151-190.7-170.7-29.2-154.5,132.5,171.3,327.9,100.8,23.9Z"
              />
              <path
                id="NIL_16"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4119.8,310.8l-103.4-24.3-300.1,444.4,139.6,201.2,289.3-172.1-25.5-449.1Z"
              />
              <path
                id="NIL_37"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3399.1,2788.5l-76-78-209.6,14.1-24.7,32.3,18.3,291.5,74.4,68.5,184.2-116.3,33.4-212Z"
              />
              <path
                id="NIL_43"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M3074.2,3031.9l-9.4-265.4-186.5-34.8-143,132.1,6,121,332.8,47Z"
              />
              <path
                id="NIL_18"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M4853.7,1432.6l142.3-491.2-67.6-112.3-565.2,109.9-151.9,418.4,40,39.4,602.4,35.8Z"
              />
              <path
                id="NIL_54"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M455.2,2070.8l241.5,856,193.1-112.4,117.9-162.9-438.8-613.2-57.5-30.7-56.3,63.2Z"
              />
              <path
                id="NIL_55"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1263.8,2122.5l-144-136.2-520.3-18.9-13.6,52.2,447,607.1,54.9,41.9,134.2,32,87.5-239.3-45.8-338.6Z"
              />
              <path
                id="NIL_63"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1004.5,1223.5l-4.5-363-133.5-104.3-268.2,22.6-241.4,66.7-3.5,232,245.2,512.1,26.7,97.3,40.6-36.4,338.6-427.1Z"
              />
              <path
                id="NIL_88"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1201,1526.4l-181.1-259.6-314.7,374,495.8-114.4Z"
              />
              <path
                id="NIL_62"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1122.3,1953.3l172.1-351-76.1-53.2-538.5,121.5-52.4,33.3,15.7,178-33,65.3,512.2,6.2Z"
              />
              <path
                id="NIL_87"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M430.7,2077.2l-206.8-49.7-142.4,37.4L.1,2292.1l71.5,506.9,219.3,229.7,353.5,7.9,32-87.4-245.8-871.9Z"
              />
              <path
                id="NIL_50"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M2544.5,2628.2l238.6-215.4-.3-20.7-167.4-91.8-292.6,137.8-36.4,66.5,45.8,95.5,212.3,28.1Z"
              />
              <path
                id="NIL_49"
                className="stroke-white hover:fill-slate-600 cursor-pointer"
                strokeWidth="6"
                d="M1826.4,2780.9l409.9-5.7,70.4-165.8-49.8-95.4-328.9-35.8-101.6,302.8Z"
              />
            </svg>
          </div>
        ) : (
          alphabeticallySortMunicipi.map((municipio) => (
            <button
              className={`border border-white text-center text-white p-[10px] text-sm leading-1 flex-0 w-[98px] h-[90px] shadow-[0px_0px_16px_0px_#e2e8f0_inset] ${
                selected.includes(municipio["NIL-ID"])
                  ? "opacity-100"
                  : "opacity-50"
              } hover:opacity-100 transition-opacity`}
              key={municipio["NIL-ID"]}
              onClick={() => toggleId(municipio["NIL-ID"])}
            >
              <span className="line-clamp-3 tracking-tighter">
                {municipio["NIL - Name"]
                  .replaceAll("-", " ")
                  .replaceAll("Q.re ", "")
                  .replaceAll("Porta", "P.ta")}
              </span>
            </button>
          ))
        )}
      </div>
      <div>
        <Button onClick={inspectSelected}>Esplora</Button>
      </div>
    </>
  );
};
