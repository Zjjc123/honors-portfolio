export const Heading1 = (props: any) => {
  return <h1 className="py-4 text-5xl font-sans">{props.children}</h1>;
};
export const Heading2 = (props: any) => {
  return <h1 className="py-3 text-3xl font-sans">{props.children}</h1>;
};
export const Heading3 = (props: any) => {
  return <h1 className="py-2 text-2xl font-sans">{props.children}</h1>;
};

export const Heading4 = (props: any) => {
  return (
    <h1 className={"py-1 text-xl font-sans " + props.className}>
      {props.children}
    </h1>
  );
};

export const Paragraph = (props: any) => {
  return <h1 className="py-3">{props.children}</h1>;
};

export const Quote = (props: any) => {
  return (
    <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
      {props.children}
    </blockquote>
  );
};
