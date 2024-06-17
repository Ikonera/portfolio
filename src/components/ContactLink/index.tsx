import { FunctionComponent } from "preact";

type Color = "sky" | "red" | "purple";

const ContactLink: FunctionComponent<{
  imageSrc: string;
  text: string;
  link: string;
  color: Color;
}> = ({ imageSrc, text, link, color }) => {
  const colorVariants = {
    sky: "bg-sky-200 hover:bg-sky-300 hover:shadow-md hover:shadow-sky-300 active:bg-sky-400",
    red: "bg-red-200 hover:bg-red-300 hover:shadow-md hover:shadow-red-300 active:bg-red-400",
    purple:
      "bg-purple-200 hover:bg-purple-300 hover:shadow-md hover:shadow-purple-300 active:bg-purple-400",
  };
  return (
    <a
      href={link}
      target="_blank"
      class={`mx-3 ${colorVariants[color]} w-max flex items-center px-3 rounded-full py-1 font-display hover:underline`}
    >
      <img src={imageSrc} alt="Image link" class="w-6 mr-2" />
      {text}
    </a>
  );
};

export { ContactLink };
