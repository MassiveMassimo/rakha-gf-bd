import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rakha",
    body: "1 tahun lebih dekat menuju grumpy grandma. Semoga bahagia selalu termasuk di Canada seperti kamu yang selalu membahagiakan kita semua! Love you!",
    img: "/people/rakha.webp",
  },
  {
    name: "Rilly",
    body: "Happy birthday mayllo!! Semoga panjang umur, bahagia selalu, semoga cita-cita kamu tercapai, kita sukses bareng-bareng yah!! Cheers to all the great times we've had and the ones still to come. miss you tons mam!!! ❤️💃🏻",
    img: "/people/rilly.webp",
  },
  {
    name: "Zaza",
    body: "Happiest birthday my day 1 companion, literally wishing you nothing but all the best things life has to offer. Your presence will always be the greatest gift which  i will always cherish and for it, i am eternally grateful. You bring out the best in me, you bring out so many colors and joy to my life. You're always going to be that one special person that holds my heart because you have the purest and kindest soul and thats going to take you so far in life. My only with is for you to keep being you but always strive to achieve better. Love you in so many different ways, xoxo jaju🩵",
    img: "/people/zaza.webp",
  },
  {
    name: "Musus",
    body: "Hey Mayllaa! Happy 21st birthday!time to officially upgrade to adulting ..level 21! Wishing you a day as awesome as you are and a year ahead filled with endless happiness, laughter, and unforgettable moments. Selamat ulang tahun yang ke-21 yaa may semoga semua impian kamu terwujud dan selalu sehat dan bahagiaa. may this year be your most amazing one yet! all the love, MUZUS",
    img: "/people/musus.webp",
  },
  {
    name: "Farellio",
    body: "Selamat ulang tahun mam, semoga sehat selalu, sukses, dan ditunggu undangannya sama mas rakha secepatnya wkwk",
    img: "/people/farellio.webp",
  },
  {
    name: "Marissa",
    body: "Happy bday mayleyy❤️ wish you all the best things in the world, lancar kuliahnya lulus tepat waktu, langgeng jugaa sama rakhaa CEPET NYUSUL YAA🤭 happy 21 sayangkuu semoga di umur yang baru ini bisa membawa banyak kebahagiaan dan keberkahan🫶🏻 semoga kita jugaa bisa ketemu lg secepatnya karena GUE KANGEN! Love you always moeyleyy❤️",
    img: "/people/marissa.webp",
  },
  {
    name: "Keko",
    body: "Happiest bday dearest mayllaaa, may this year bring you endless joy, incredible adventure and blissful endeavors. wishing youuu all the goodness & warmth of life & may you always be happy 🩷",
    img: "/people/keko.webp",
  },
  {
    name: "Bia",
    body: "Happyyy Birthdayy Maylaaa!!! Thank you for always be a good listener for me 🥰🤍 bersyukur banget bisa kenal kamuu, benar benar manusia yang sangatt besar hatinyaaaa, wish you all the best in life cause you deserve to be happy mayyy!!! Langgeng terus yaa sama rakhaa, aku udah siap kondangan nehhhh!!! HAHAHAHAHA 🫶🏻 happyyy bday bebb!!!",
    img: "/people/bia.webp",
  },
  {
    name: "Mel",
    body: "Happiest birthday my mayllo🩷 I wish you nothing but the best for your 21st birthday. Semoga kamu selalu bahagia & sehat selalu di sana. I am always so proud of you and everything you do, you inspire me everyday and I am  always supporting you every step of the way. I am so very lucky to have a friend like you, always believing in me and pushing me to be the best, and I hope you know I’m rooting for you too always. Sending you so much love from Melbourne, I hope we can meet soon:(❤️‍🩹",
    img: "https://avatar.vercel.sh/mel",
  },
  {
    name: "Ravano",
    body: "Selamat ulang tahun maylla, semoga tuhan mengabulkan semua permintaan lo di tahun ke-21 ini dan semoga menjadi orang yang bermanfaat terus bagi orang-orang terdekat. Wish you all the best.",
    img: "/people/ravano.webp",
  },
  {
    name: "Ale",
    body: "Tetap semangat kawan biar malam saja yang gelap, jangan masa depan BRIGADE",
    img: "https://avatar.vercel.sh/ale",
  },
  {
    name: "Sadad",
    body: "Selamatt ultahh mayllaa semoga sukses selaluu dan impiannya di kabulkan dan longlast sama rakhaa",
    img: "https://avatar.vercel.sh/sadad",
  },
  {
    name: "Manda",
    body: "Happy birthday mayyylllooo, mari kita sama-sama mengatakan assalamuaikum 21🤭 sangat bersyukur bisa bertumbuh bareng dengan kamu dari kita kecil dan sekarang di umur 21 yang bisa dibilang dewasa kita masih bareng, masih saling support untuk segalanya meskipun udh punya kesibukan masing-masing tapi kita galupa satu sama lain. May!! semoga di umur 21 ini kamu bisa bahagia selalu, bisa ngewujudin seluruh harapan-harapan yang kamu inginkan, dan yang paling penting kamu tetep sayang sama bregedel🤭🤭, mari kita tutup wish ini dengan waalaikumsallah 21 😁 ",
    img: "/people/manda.webp",
  },
  {
    name: "Wawa",
    body: "Happy birthday mayylloo, semoga langgengg sampe nikahh, semoga apapun yang di inginkan tercapaii ya maaayy, semoga adaa waktu untukk catch up nantiii",
    img: "/people/wawa.webp",
  },
  {
    name: "Chia",
    body: `Happy birthday to one of the best people I've ever known🥳. May this year bring all your aspirations and dreams come true and be filled with love, joy and happiness along the way!! And many more doa baik untuk maylloo❤️❤️ Godspeed!!`,
    img: "/people/chia.webp",
  },
  {
    name: "Adies",
    body: "HII MAY apakabaar kangen bgt!! Happy birthday mayllo si gemini baik hati 😄😙💋💋💋 semoga km sehat selalu pj umurr, makinn pinter, makin sukses, makin cantik, bahagia selaluu, dilancarkan segala urusannya yaa may dan apapun yg km mau semoga terkabulkan dan diberi jalan sm Allah.. aamiinn2 love you maylloo!! Cepet nikah deh sm cowonya HAHAHA so cute kalian 🤍",
    img: "/people/adies.webp",
  },
  {
    name: "Kay",
    body: "Mayllaaa happy birthday cantikkk!!! Semoga panjang umur, sehat selalu, diperbanyak rezeki dan dilancarkan segala urusannya yaa🫶🏻 thankyou udah mau jadi temen akuuu hehehe kangen bgt lohhh🥺 sehat sehat and take care ya disanaa ditunggu yaa main barengnya lagi sayanggg😘",
    img: "/people/kay.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3, (2 * reviews.length) / 3);
const thirdRow = reviews.slice((2 * reviews.length) / 3);

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
        "border-gray-100/[.1] bg-gray-50/[.01] hover:bg-gray-50/[.05]",
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
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-300">{body}</blockquote>
    </figure>
  );
};

export const Wishes = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-20">
      <h1 className="text-semibold mb-8 text-balance text-center text-6xl text-slate-300">
        Some birthday wishes
      </h1>
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
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <WishCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="gradient-mask-r-0 pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-b to-slate-950"></div>
      <div className="gradient-mask-l-0 pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-b to-slate-950"></div>
    </div>
  );
};
