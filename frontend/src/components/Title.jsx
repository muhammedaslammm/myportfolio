import title from "../data/title.js";

const Title = () => {
  return (
    <div className="title text-neutral-200 mt-[6rem] mb-[5rem] flex flex-col gap-7">
      <div className="leading-[2.2rem]">
        <p className="text-[2.3rem] font-medium">{title.name}</p>
        <p className="text-[1.5rem] text-neutral-400">{title.role}</p>
      </div>
      <div className="text-[1.7rem] text-justify text-neutral-200">
        {title.description}
      </div>
    </div>
  );
};

export default Title;
