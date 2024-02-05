export const ProgressBar = (props: { percentage: number }) => {
  return (
    <div className="w-full h-[10px] bg-gray-300 rounded-full">
      <div
        className="h-full bg-primary rounded-full"
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  );
};
