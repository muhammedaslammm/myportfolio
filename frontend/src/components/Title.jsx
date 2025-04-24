import title from "../data/title.js";

const Title = () => {
  return (
    <div className="title text-neutral-200 mt-[7.5rem] mb-[5rem] flex flex-col gap-8">
      <div className="leading-[3rem]">
        <h3 className="text-[2.7rem] font-medium">{title.name}</h3>
        <p
          className="text-[1.6rem] text-neutral-500 capitalize"
          style={{ fontFamily: "DM Sans,sans-serif" }}
        >
          {title.role}
        </p>
      </div>
      <div className="text-[1.9rem] text-justify text-neutral-200">
        {title.description}
      </div>
    </div>
  );
};

export default Title;
