const arr = [
  {
    title: "Overview",
    url: "/metalayer/superstack",
  },
  {
    title: "MPC-TSS Bridge",
    url: "/metalayer/mpc-tss-bridge",
  },
  {
    title: "Decentralized Verifier Network",
    url: "/metalayer/zkp-verifier-network",
  },
  {
    title: "Utilities",
    url: "/metalayer/utilities/overview",
  },
];

export default function SuperStack() {
  return (
    <div className="size-full bg-white dark:bg-black pb-8 pl-7 pr-5 pt-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 dark:border dark:border-gray-800 rounded-lg">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          SuperStack (MetaLayer)
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-4 text-base leading-5 text-[#6B7280]">
          MetaLayer for Bitcoin Rollups
        </p>
      </div>
      <div className="flex flex-col gap-y-[10px] w-full mt-7">
        {arr.map((_item, ind) => (
          <a
            className="flex items-center justify-between group"
            href={_item.url}
            key={ind}
          >
            <p className="text-lg text-[#2D3036] dark:text-white group-hover:text-[#f4431b]">
              {_item.title}
            </p>
            <img src="/assets/arrow_right.svg" alt="MPC TSS bridge" />
          </a>
        ))}
      </div>
    </div>
  );
}
