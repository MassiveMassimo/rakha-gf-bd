import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rakha",
    body: "1 tahun lebih dekat menuju grumpy grandma. Semoga bahagia selalu termasuk di Canada seperti kamu yang selalu membahagiakan kita semua! Love you!",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYcisP6Dz2_QURGAPZrUP0rHmCeO-HcCGKmG2u8faosESBXHVJWF3oO47KB0VqDUNnKiiMMFtRUVU8M5Qnu0R642BVo0jTFZQ=w2900-h1798-rw-v1",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const WishCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="aspect-square rounded-full object-cover"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const Wishes = () => {
  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <WishCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <WishCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
};
