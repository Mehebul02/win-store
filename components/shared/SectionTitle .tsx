interface SectionTitleProps {
    highlightText: string;
    normalText: string;
}
const SectionTitle  = ({highlightText,normalText}:SectionTitleProps) => {
    return (
           <div className="mb-8">
          <h2 className="text-3xl md:text-[28px] font-medium">
            <span className="text-[#15ADB7]">{highlightText}</span>{" "}
            <span className="text-black">{normalText}</span>
          </h2>
        </div>
    );
};

export default SectionTitle ;