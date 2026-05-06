const Marquee = () => {
  const announcements = [
    "🚀 New Arrivals: Srikanta by Sarat Chandra",
    "🎟️ Special Discount on Memberships - Join the Hive Today!",
    "🔥 Flash Sale: 20% OFF on all Science and Philosophy books",
    "📚 Free Shipping on orders over $50!",
    "⭐ Join our Reading Club for exclusive monthly picks"
  ];

  const formatItem = (text) => {
    const words = text.split(" ");
    return (
      <>
        <span className="text-red-600">{words.slice(0, 2).join(" ")}</span>
        {" "}
        <span className="text-green-600">{words.slice(2).join(" ")}</span>
      </>
    );
  };

  return (
    <div className="my-2 py-4 overflow-hidden whitespace-nowrap relative shadow-sm border-y border-base-200 bg-base-100">
      <div className="inline-block animate-marquee hover:pause cursor-default">
        {announcements.map((item, index) => (
          <span key={index} className="font-bold mx-12 text-sm md:text-base tracking-widest uppercase">
            {formatItem(item)} <span className="mx-12 opacity-20 text-base-content">|</span>
          </span>
        ))}
        {/* Repeat for seamless loop */}
        {announcements.map((item, index) => (
          <span key={`repeat-${index}`} className="font-bold mx-12 text-sm md:text-base tracking-widest uppercase">
            {formatItem(item)} <span className="mx-12 opacity-20 text-base-content">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
