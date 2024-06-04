const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border p-4 shadow-lg animate-pulse">
          <div className="h-40 bg-gray-300 mb-4"></div>
          <div className="h-6 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};
export default Skeleton;
