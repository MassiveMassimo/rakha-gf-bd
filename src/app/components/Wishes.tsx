import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rakha",
    body: "1 tahun lebih dekat menuju grumpy grandma. Semoga bahagia selalu termasuk di Canada seperti kamu yang selalu membahagiakan kita semua! Love you!",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYcisP6Dz2_QURGAPZrUP0rHmCeO-HcCGKmG2u8faosESBXHVJWF3oO47KB0VqDUNnKiiMMFtRUVU8M5Qnu0R642BVo0jTFZQ=w2900-h1798-rw-v1",
  },
  {
    name: "Rilly",
    body: "Happy birthday mayllo!! Semoga panjang umur, bahagia selalu, semoga cita-cita kamu tercapai, kita sukses bareng-bareng yah!! Cheers to all the great times we've had and the ones still to come. miss you tons mam!!! ❤️💃🏻",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbNm4osV6rS940mZDJQr2dvmUEdjmVYuIgjKvCOb2gCkd-eE7lDurxeiqB8_bRmGhpEoWWbrF-z4CsLq4t2xTjeMweqQJZMgTs=w2900-h1798-rw-v1",
  },
  {
    name: "Zaza",
    body: "Happiest birthday my day 1 companion, literally wishing you nothing but all the best things life has to offer. Your presence will always be the greatest gift which  i will always cherish and for it, i am eternally grateful. You bring out the best in me, you bring out so many colors and joy to my life. You're always going to be that one special person that holds my heart because you have the purest and kindest soul and thats going to take you so far in life. My only with is for you to keep being you but always strive to achieve better. Love you in so many different ways, xoxo jaju🩵",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_HK2vbxO8bIF3vLqSswoZSNvy7kUIz_-eJXNcyBRki3ytm1rEZHsa8TC10pNT2jFBLFGJ-rM3HO_RDJxBK7QeFU8Bnl6FJzviNOl5oVbKNmEXc_gY7WB4efNSWaDF1ZMLUO5SgQGo2mDB20v4VflcV3Ueq_DWlyCRGNx36cxtKfmHJtJBGPPtXdbve4iYMuSRxYh07cPILioogP6bEfhWlrs6ZWcUmb7eHlhuENK7L2VAt9G_tQhP2iLRObk229jCgPmox5y51DF0cXjBTSZHSlolmxs8Cva9N-uD1mdc9Dt7oPMpobOOI1rmyz-0VKA6etjQN_BSxDim7Xlf0IfMFA6Mqj5hqmU7fmm85KWsHluw0CxpSnHOid2UNpWqn7KxDCOWPD8zB8D9fmtGUNZBd2v2fmo-wsQqtO30mSiPF_oucFmOmj4xJjAOLeTfBAPYz9V4x7e7K-VpbLg_P76k4QSWJ5YO3iKeZ31dk5DjfHC8iSTYr1GcFEvCIxCObSqXuHzaNXN0CUbNFDcnRnjzLwQuUE1b9oPMNH88qNXL8d9dAJksG-Mvh8QLneMPw71RMcYo-qXazys7zOthG6ecwqjXENzCBrnJVolMwMP63RG1dNFYyZosPeOC9E2HGEySha9raFcnxkbJsZtT8rbI-ReqNiu1Wl5U9gmyjAkfPd5OEffRZwl6B3NTez2la4kFdwZ-FQ6v7q0wTSsePEhuZMRdjVsMplcXTIgP6o7Y0Od6wSd1bVLWx9gMJ4KHeunAiPIZMrvFU8fvcCV16ZVzAcvMcTSneFK0I0xR51J6LF3N0XNknNoNd5UdHIUUlegTplGYAA9AKgl_55YACKjy67rqq69oyckW_A-py_NVj2dmIlR37Gu_rXRpBnuqPAg6tFeKsdzYZxOIHN4PtamGnlrmo5PnvH_lI3H7bgZ89Ymz-B93vBUMABTcJ8F8uyI7jkoQwGjdVdy22l-KeIa1F2VbeUpIhS3LS7QRJTVBDp7rTliYVaf7al7tpOdqCC_jEv52tu9TRC4n3oghzfb5I_cZ2S4rrz82FYWXV25Mttu_SDIDTj9lf_-9LKAD3YgV40YbEegSv1B1NO8savcPOyldEpzqLnB0NY7riQtSO2UJyVSYdYWRdYQeEFZwIWrSMkI1e6O4AbxvYmcvkWTKhsMMmWfRVzIX32yPXdsnEiyMYZp_I1jdDdYQjiSQ0ddL8806v5UmGrfJBGxAOXFsPyzGvzq6SXQnIu6GszTy8D4lJKLFg6SdoAm15vQxWOctFh6GRWjAnbY8LvKd3UZAH677JzP3aLzopNTVYvF5muVxJrNNyATQPRB_YfkUfRBUBrYBGXxt_v39ExfgBqPgB1hkvQpNsbxS2_ZBu5mbQ8QTsvgVJMpA9WzLolm2IM6JPE8hmKXGOeUxD7LfiAb9mS9ASieYFkpUWHe2MT6bQgcDRtGB_x7NdRTEgTMNwVtU_T99ITGp8T4uUgu05k003BtSQSwUM3vegTgPjeRrK6z8Fzx4NIHckVFKXCdYf8sA4oJPatlfLjYO-hzHl6HnjRZRoyuMqFoN4NwZ4JFrAm6G9gQzDSdQLxQSJgDW6z0Xp5N-A3hBvMhimnm3aDDZJFMeDfI2carDzPqsHAfLo-TRiFYjdFoswZdd8AICjw8IOjlHAzHgjvqN52fqGhU8rdMCez=w2900-h1798",
  },
  {
    name: "Musus",
    body: "Hey Mayllaa! Happy 21st birthday!time to officially upgrade to adulting ..level 21! Wishing you a day as awesome as you are and a year ahead filled with endless happiness, laughter, and unforgettable moments. Selamat ulang tahun yang ke-21 yaa may semoga semua impian kamu terwujud dan selalu sehat dan bahagiaa. may this year be your most amazing one yet! all the love, MUZUS",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaGGf1ZtFh5U9Y9cqvZMuuhXWXlsU7UuFFPa_9TOGM-kKxaba014Irn2YrjhEH0wY5BLtn3AngBSioJEhonPDEfNnkZdJq_85g=w2900-h1798-rw-v1",
  },
  {
    name: "Om Farel",
    body: "Selamat ulang tahun mam, semoga sehat selalu, sukses, dan ditunggu undangannya sama mas rakha secepatnya wkwk",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_HBRZFtDsbKo7S9u4HLK0jaNoR7HvscPAfYolCGcdl8T9z9HKs9H1wMDaorVnpPbWqUZiNN8nyy0I5qW7bQlQ9LtRYakT4PGdREwp5PQfjx04cHxPV56jVkXXR1Q17xImhc-bJ-I4cJ6xDeselznbrhtOhW-KWIFwC10Erx7jXK4BvCVTEduVDCTSBx_gqWunvk3xx-vzBoS4nRYrmwuzqkzKiK3Jwfwovgffu9RCmy5uEpNzkItxFtTZicc6tzHQXm9WCSty7l8TiKM6sgz_MxkSxqrA5DCiHdY82w9L5rpo3WksxfcSTu3jkd3-NzlLCqxF2pydUzxe5-SZyrB0BTFgXoE5Adxy03flT1sEAjMbWesW7GM9HeFgyylH9sU1SUzXfe3LGvniO1TM_RQzvayocqN8QO86UdlunrHE3R1aXXEXA7u5IjfFoaSOaMI0wpYWvX1Wc8MCT6OUoIxqbAxm4fXteBoho1C3cYTiD3dcTLr2_ZLDYl_skd1lmTaOpKmewQ3lF1iTQpslZOU8HtIty1HNnuuQQPCqSBAjuGl3LKISlcGtUOBSq0xkaVzQYE6X3YFCdw3xMFIH_bivo9dbpmxhFbEzbcPcdfzI4Jr-lVMambmq4-mTFqgjn4VbTOuXncXvbyw9624hk5fF5pjoa9iPltYbZ2wSA6aliXAbNsNIYHKkIs4vjpdQ5KqdV8Tm3ZlpyGU77U6nyUsX-x1o3J-8MGFVNyAYDjFfHdlDIFr9bbRTG0EcEYcnzj03FI0fLbr7BRjw0wQHPqylP5TEVO0lyodnEK8FnzEQMw8uUpTGy1sCDrtRX-JjoWe58BxDXKjCcIxePUxHcUgEZ4i8FOcMNyYkZE-TVreJzSUoAz4WPTWM3kQtxrp2ZJfntZYOTraMZsvPsOjVMSQKGiPSM3vZw3kPddHSFe4eiyz60-555fhgZ4KVKXgeHc0h8I068P4DizGtweadh6aiwG__SOrzz9tnpbaFloPFlOzwFwmyPbhV0f9iWakbYerjWeYTKvKHkwev8=w2900-h1798-rw-v1",
  },
  {
    name: "Marissa",
    body: "Happy bday mayleyy❤️ wish you all the best things in the world, lancar kuliahnya lulus tepat waktu, langgeng jugaa sama rakhaa CEPET NYUSUL YAA🤭 happy 21 sayangkuu semoga di umur yang baru ini bisa membawa banyak kebahagiaan dan keberkahan🫶🏻 semoga kita jugaa bisa ketemu lg secepatnya karena GUE KANGEN! Love you always moeyleyy❤️",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_H7AYoY0k0K8wqY895BJtLHIB7GEs5jO1p8Rg0NzCvxnO6Iv1NeOPwi1808FdsbilTxiSxFzmJb8zn4hgJIdOdygGD3Gl4ZRuuxhm6m3pzJG71YD62xI9gLM_Y6AigEg9K9V7tFdBpJXp_jVVW-QaxYE5ULDId_qtWEH0_mkVIvJ_GZNW13wk0R-lp1Eibd2b6oq2fUWE9cdkfQo0xt3LXJMGzWuLcZkfsciV-g2iJHEap811GpEwvWfko3Vtt6K3olijfnUfL-DwFBJ7h8tCtoIhDuP6FpjnXJ9Pai0URd7A_bEikoEEVje6EzZuyiRosa7addtoQAttuFMPCwAgeRjeizdyL6U1YfRpKqoU90xcrTHAuaUp186K3qFDgs8wKQyVRQAhkxi6dCGeEPANpYyPqFYL1CADwekbCZt8flSjN3sPqXY_WryfyFfw02QVxLxLv4RCARBQV1CnJ4al3husNGURnA0jbVxZjYCB46gYIe5qXD10zf284tv3E_AcFAcNzyhS9yFdjpaHu0hYy8A2tWR-NPAj7NpmD7TeY6mZD2TRwHliD0cr4g3zOlm5_9NCx3QNjXTfjWaAGGCZ943tE-E2zqfTWguJkZlf6sM8iVpCvypiJqsQLyCDOAoHu8N-KIycu2r9o-yYeO-o0YmAO0aD-RNP2rsuUFt7qnAfe4Z-m6Ep8eCNdgj_h0dsDP17cNXMqOWZT98i3YTdjRvKoUmEOoqRItbLPdIcW10AFCVr7rOBFjLwnxYRkut_nwUI68NzFX41--a9q7P8VGFf3AibOV8xkEx7ubdEeqkZbJspWCN5UXybDIH97v2JeANiqpgbD_76t6MfCpPA64mhu4yUVs78So_c7ej5s3BGmeGebwFN5mAsxHM4smQXvn-Qo8Kg-tn-DIOtaXo0hBicgyRvWvuBg0ksAZsSJxUsH-KB4wkssF63Z5AtKbO4EX3-TqZcKep-gV9gSMYPqpWKZglYSPKsfFJvClYWEzLPgWCywYEOsh9Ct2YsPtc6e-nLOlcz9-hbI=w2900-h1798-rw-v1",
  },
  {
    name: "Keko",
    body: "Happiest bday dearest mayllaaa, may this year bring you endless joy, incredible adventure and blissful endeavors. wishing youuu all the goodness & warmth of life & may you always be happy 🩷",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_Ec_11IZZHhiX6Hd7o5CtYKhhv_pqVBaCrwqMOBwNjVF1lWEnBUI9uqBSABUePgofszLKH1GF1UvBqaxSXch1DNT-fvg2Ky564eY-3BqTJGa_d-r_6DUQQlSLSBR-LJp_MQBcX4EdSL47ME5-yQUTgqgWra1SY-HvKRRoAjiJ05yzD9PRwfljzBAIpVP_T1YboxAPlhANJGu2tYMpRZDhvRNitVQb5r1dK67moGnPRXqLb1Af1nN2AYUhdY37RSD3j1uzkokMGMIohjZ70hafVkksQPy1rXM96OZooEOeefrbhnEAYLoR30Kbwmx5d03BYxL5HQC80O8oK7O9s0_m9MDY7zhiKAdpHCwtm1UeB9iupa3PoFdhLPvHW9sW65FpFUWuvipZ17ttB9kDTIWykokx3K6ARxwqHUm1A9HdCiJTNAye2iIRZfsnMvIjEiTlK0Lfv9ysNdXsN2awPV7KC6cUNxL10Sjjf-nEaMQ-I-I6vHbtDP2T7h9PqnUGHsmFa8Z1U9S77y2SEgjBwIQ5UoxUDRNKIYtGL6INfnwAATJzYCu9dacHXajM5SHmhnLjLVm-NGfioHgOUF91D1pRRiHQOcfXN8nGh9AdBN_Lp5XE4uGNzk2-IJ4IXgVRUVJ9I-vnrsAnJFATy9NgBvhTb4_EzI_VKs_gNx5Iy8WxtpZ3sRPS-iPE6DjsEFSk5fY_SEgB6wjcddsGIwn2arQ1BtkLHHNEuSAJEbWEV5NiZld5dz_duS0SIvpRwNCGxmv7uwQX0JCrnZAUV5BLIoc3NUi77cXKuZO4FijD3C0SJGP6Ig1H5WcL1aF8B7tKWZvRaqCvhfySaTNkm8uIo1XCyethTBcuiVpT7HbludQTH_FQ18IzutlEpZJcmlUlzgLaCAWZeNjzSEUv263YZpOT_vMzDlqzdSA15Aji_kHFkZELXy9JBZALEa95i2_PTqtBnTd6T4C3tycL3im3yKVE9loTcfEA8up6NpmPDjXF9yVyb_xEwgwEoOduyh1A3pBfe51LxvHpQGTrw=w2900-h1798-rw-v1",
  },
  {
    name: "Bia",
    body: "Happyyy Birthdayy Maylaaa!!! Thank you for always be a good listener for me 🥰🤍 bersyukur banget bisa kenal kamuu, benar benar manusia yang sangatt besar hatinyaaaa, wish you all the best in life cause you deserve to be happy mayyy!!! Langgeng terus yaa sama rakhaa, aku udah siap kondangan nehhhh!!! HAHAHAHAHA 🫶🏻 happyyy bday bebb!!!",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_E21aUxRZ7_74C64i-43L02bETPaWnOEmQ3Fj6xX0Dm34-xQ0g1n1gYTawRxVgqNKg7g2zXox_PIqtv_-XLYHdJhLxOe3KZ4XEgsdp-q6oMgQy2SGsbslW-ZkJskUmMBUoJWYx-ThY5Rg_c3cEe6RRwQY11blA1uEBxniG_XhvolFBtpdJGzjiy8TK8ZJgBQFbq2M8K1fyS82wtUrMPDTQwfHo-qyIXiQifnt9YGmdX1xY8tzET8-hc5dMLEEBGI4bz-1Mb1B8iA3gpp7wZsN7_AIV0E3lr6EOEKhEL_CaGXR5WYVSKxOHE0ROBSV9jin5SFilEKBwQuFEN2CGCbENzOUkHNjzx7O51OqavgDs1MN55pWHteG2U51PZ2MwMZRljgEz6xHdMwVslBt9DskyXd1pTHy-rc7h0yEAvG0AU1ghGzNm7nsvVK8qH1PCB9hwdsQamDcQFDGLcGt6NIR06CuJ_sQPvgabLrempDmZeNTzRz_-VyDr9zubZUhvkawLnnXwKSeejS8ZYRUw1ZOVNTGGyQ-cfW8rN-a39gWjHUvIEhfmSMd0sYniz-spTRGG2XQzveOkHdAGBhB5jiMJGgjLThcM1fSykjbcCe-CH6GNmmlX0KZXEtijb5onkCksVNAQXk36JZoIG-d10FvAkNKxON7XBVC95a_FiCY3ZtjrhXXFl7iA0HKYVF2w5cB6qQI2fhNycNINRCNssDVpCry9cJoxtZSlmlWTwHcSK0AStry51t8HNekz79WJz7-aU5WvCLj2Gf-ZWAf5x8lF9AWgZTOYNGJdAVZx9tjIAqnN3yWt_QsniqSux1rOjFMMR9rNccd2Os34j4KJ9KtU0Mlit7QG9sgNNMUksZRxLmA_TSA1YCFIhA3KfVvz-wnFD8DIDzA8G3I4HZuBD7M2xtZ4rQGZtI0FSRNTsJSvLgDSKbkcv0LRK0QHW6o7GYo5zjacWbWkOF29bYjxm6scZ0G5BZDkTBlwMvRwCI4jzIJ-XlMc_nbvCOJoi-11sS0JEzLpbYvX51BU=w2900-h1798-rw-v1",
  },
  {
    name: "Mel",
    body: "Happiest birthday my mayllo🩷 I wish you nothing but the best for your 21st birthday. Semoga kamu selalu bahagia & sehat selalu di sana. I am always so proud of you and everything you do, you inspire me everyday and I am  always supporting you every step of the way. I am so very lucky to have a friend like you, always believing in me and pushing me to be the best, and I hope you know I’m rooting for you too always. Sending you so much love from Melbourne, I hope we can meet soon:(❤️‍🩹",
    img: "https://avatar.vercel.sh/mel",
  },
  {
    name: "Ravano",
    body: "Selamat ulang tahun maylla, semoga tuhan mengabulkan semua permintaan lo di tahun ke-21 ini dan semoga menjadi orang yang bermanfaat terus bagi orang-orang terdekat. Wish you all the best.",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha1SkTCurEOs2x5OP0SX8pfsruUoV3UXoRDD-08YBZhti0woBZ0o8ZPTEbebiK_E1yOF3p2JKCq6g_zZDl8-Rc2crrmPirxYsE=w2900-h1798-rw-v1",
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
    img: "https://lh3.googleusercontent.com/fife/ALs6j_GIp9YAJ7pluRmMtjTh-wbGPPuY691rzfM4BUESwTTsykaFhLWsTLf2NuD0o2fpuMK3ujtiiaBhqn9kxjF8ZAUSGhw1x9QURlwxT7iajly4eN-DcIwGRhbVix0CEx-xrYIjrJPNEfEjJRzR4jU7wZPSavXGtjhJqbDkk6vDYZ3UR4mfBx8BvX0RvVcQaKww_78MBrBoWOcfRQgbALPPcli56vcFkzNgZ0x1f1NsOPzpbtBLz_MH1WLu9SnEY6gnzLusvYycRwtLjziyNI7NZE6ujfu1gmkSz3g1_Mk9aRSAYA4ATKpQimkd1VaXJtIzzBl_QPi53E54prvch7Ass1Ncb8Bygl-gfAujmIu3KKujjCIekPOsVBxzZOKwAQVNXEMHqxa38BN_iKbFNcJ2nRiEjlgu8UrKwF9hmYXI06qr91sx2qYaWnacEPFJKAm5PxGIocgCgMkKHf2gkezM4Bro_p9AusEiOWvxhuRig8AlHgUNhYsz01xRdbtAREKoplJSwQlQ99-WGrkOWRxfjeE1-4zrmiy6Lao1C2zccBk81xH6kfuMIH002MxX2TVb_SIhvKeiBACucBkz5ouNPdPr4E9BDkqISmCcRGnsWf1U5ZnrLYo8AadO49ZoS54YJZjFvzPunwOXe9crPgRZWe2g_pN96_cbLOLQgM3CWnWlcgTZg4GWzpWrwUuzIoitZqHINnsdKW9ss2WULVV2-fpMoovzZzvRhlr-HVCuO47xLJQyETnznmkahqxdzgeLWCsUXVCCaGL6s6Sv97sVuv6YYVcBtihUZ0jA-VQwIeBGp96RLPqXX6cn2zWZu42UrQ7P2dhrZnrTP0DgXy2Wy9e3lGottwM9R8Mh1TnShlE_0GHyDY01xLJxW994YvqGZ2I9ZJmYJqJPPlCCy8Bq9crDQlhSUh8TEibpfziDthl8PIPeHp4vyjy0r3O-wqSGEwPry7JdeL7KhUb1nH2cLZe-F0k-Kj14I-okXnQLOXvompg8IJleOKP24mks2TJaSFnn1GsGHqJNq9Q7tm_WrwahVa38zp2tO5vUL-qMv81H7o54mUmqOLTQ0njV_w8kR1rkwsfAXoBX6Kf4Wot9oS3m-28aUkudfnFJTaNW9phtIH2yEgL7E35lTR8YY5SELVv4E2XNBCTsvMiQlyyujXFNlMj9s5Agv5VKRY1Ojw-rPaNN_FHIJVPz0GRZXRhALegeAsUHZL-dFSTmv6VKe9qphBBq8o9WHvDbTqB3nZqAvRFSWcDN8_6GJVoqHOJ7dACHeoDsvoCG7I-YdTtlv0iHu_aECwfDT5QsWIKti29finuVfqdNBnzTpQq11k9E-pbVxcuF7HCCjqChSQllzU7wmMOpeoSogVZuVF_oIUmNu3Y_Xv45YFNdyyGjWBbg0bibXmnW8kkW3syDX49Q907KMIX2wcwlGXgWngTG3iWxVjMkLmcabhChUdBTzW1TxFvxCnclkt4_hycTKLAhm9adWnJa1x_VfS84U8hFIQeNQM9S3rVbDi5AI81dS6U26XmomWRV5rV0Q9qT3A7efHTRKJeqnSc7Ai2JQRnAl5AcL77bFcRUncoyM2wAw6D-H0XLg5E-tUvbVzTHa5S7H4-n6L1oDbyOWs6ndujBAdzwUBr9LIzs6ZNsm16xNoGe2Tf1rqiYrS_-ronWMfw_IIapivBp=w1942-h1798",
  },
  {
    name: "Wawa",
    body: "Happy birthday mayylloo, semoga langgengg sampe nikahh, semoga apapun yang di inginkan tercapaii ya maaayy, semoga adaa waktu untukk catch up nantiii",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_EK2IDIwEsrPN2RK9YVE1QqxqP-i75nvPk_cGNL2AF-3gTOREyC5n8wOmyu9lyjhpJZXjjsq0wWZnbWMd3zOJnmN9k2zs6b_ZaATzLbVGdzqEmOeXlI9gZV2vqzm8mAxpvSsU02LfOP0snJUbi5uVpSzzjf3bW3EaPYiNAsJEEPlL3RBzwvpzK4bjZUE3zAtIvAn44jXfimzHHklCnOSmNS7O257pNtuDEza7MOxIdLgKkvwLo4-y4BdLoQk63mGBb3y1qOsnjeA3qBHswAR8JkvLU_oJBBqYRAN0zpqR-gE6NfkU-dsSkhIO4kPmWUMEq-J128gNSzOtOdOgqJzB7IRBV3klxV2k8NYuy7z62haVZ2yb96qE4Mcc-GIbwVIHgkFvhq0FLpIUKqzB1luL3yRI8YuPWrXFaNH-4Szuh_oIc38-C4-1eomnwkaV5YN_wjwiLF-I1PFbKzHdQ3OcaB4vaoVbcpJptrkA5JEntjLP1Ps5L1YaDERrAUGDny3DYGnuV-v2VkXgKnafPuXNl6kmYZ4_SJ_lC8ON2gHFKqF6t06gGnlyqKsrtmF37UCiSfsrV1HIiB4gSDB10X3ebO_uA4FiV7ADAcZBah6ApxDzsu_p_98meh8JGp3eoLk3PKcjsf4lh6gUu7euRegt5B_HLAf6RIzvr7TcjkmHPlQYtgcd5uQ7bk03EzgJpV5zqdG6sTjccnqF-Bk0YgedsQ5kV6JwnHJSlFVfzLIbRNaTp7--awYQ6R6E8-zvwISosobaDZrBkGejzu-jArZiwCA_IFqKgSbkBB_aaoCroR6_PpIYt28LZlVg3E3mcFJ0ZNPmon4CLrupTGWECoi5HTmYCld1zRjpYbCMq8-9MoBhCIWCqfrEhvtIslVCnw9vu7L1K4jeopfhPmXgR2SDkEFpVwNPmggMbUeAUFuyNEhYvLpKGEWqwLV8bkma8SXZ_468HQR10m8ISgO2t4JddnTNYcHtHasmJfAnXbu90aacCopaAgfmg4Bt64-9MTk_oFVS4HpV99lwcK1dbGYiaNqx159MnO020cwZbvyVrkj-OJNWIYOQaiEar2wDef5me2fSK3JA5T4zQqKMf0qCoBNLvq90c0uYJRFmfIMfmENE70DpT_GUXDeZ2yv4mix4gLM4lv7d7W7JUqxrnpOSCZpoi4juMQUTWdCCy6Ow92nV_q0VeXKHJRkSo7eOIN2DENEJD6_0ljty1pq5ALyQfo7522J2tM_eRfpD_D7VrM28Ym0F_XYMUmaO38Mg6wtcHaKTay5KBuaEt1WZvARyV1dUsdUerRNjlhQu22ThQZY_hP3oaaRPOxgr-ho3vj-N6jHpNwL-327WGJYe5Vx7Og9dYk6udWJ2CjxfUJKzZsGTvU2ZRFrHiypAblE-Nl1RBUVxv3fXWKMo3jQ4R98tjcjdOT9WTuYqBNPsF7MdjyZr6ehg5aQ7RRXsTV08CJS0GOG1mR9wHP86fAXdv-MZUhE0xK9c6twQCJpXRlxF5FQNrwuBNjeqC1UAp23-hNPr9EMbfUMzOcStoAc7kz89fAbq1QSsGVc2KkHYOWmHzcFL5INcFr4lK43VQTV921HV5P6yRgqAaGX4EPYO_2EGFJFSfIX0TNfvWarxb9qAJ4zAB0T6XUIBQj2OCsfqXc_4mPWzN1a1VI5uHo52C_OgeoaR0=w1942-h1798",
  },
  {
    name: "Chia",
    body: `Happy birthday to one of the best people I've ever known🥳. May this year bring all your aspirations and dreams come true and be filled with love, joy and happiness along the way!! And many more doa baik untuk maylloo❤️❤️ Godspeed!!`,
    img: "https://lh3.googleusercontent.com/fife/ALs6j_Ej2oieBmaoe53LBztDAy-T9VywzsHjEPITzgFLCd0JKGsmW_bGF6c8flOnCwIQWykUUlLVZyMGo9S7QscYibc4q6WlxB-fTm1iExeqKG6t1tBMDuddZELD6Tj05weqLzuub0SSDgZKBR7ywDnuypXvtSdEtr0-J9L-jWswjpTwz1lZfiqvImYS19cRTawddsZUFG_xELDfTYltIoDLwfiMKV7O5FaMN_IYBXhLp-WQIHQ7Om9fAFFmZg3DA0m2LgSx1PvlxnBhlov8DfhSOBLcZBASnQdx-qhygUU13aECnxVOa-gGOH1zVVm82-h93PK0XKCSAckeupP1wqNr-oEXMdQRtUD5Xx3kLuulOo0HUyboVNIzsuFT5ez1lI4wgUuFRWgCV-Ohb0YMzxCd9_9EWRw21p-PA_ZlAcP1o5F9cChWQ9Bbpe7D-BgexyO4bHGrGwxabkz0iUY4a9v2MiCptze_c0xj3kHZP2pifQkOBUUXV6N1sVO5OeEwm02xWiqxfzVgym_SUzJNUv0ijOo2GwkCkMUKX_3-EvCWAKFGvh4eZ5AW6_WqN7X-3tW5MbvkeYrHSDjjK6zDGEKyb5cjXyAm1MSbaq-pyHCk66vLu7-k0J2LIe51G6TWxCUBPH93j1mqyWErJzAQfIx72qTEre1BUftXVudf79iqohikb_kKE3kZgb-36LEfPK3k9GXjHeDeNCs_eSSqIJdFUlYO1pMP3C0IwrB7rRwFvEvm7597sc54OFJ8dgVkwU5tG2RL6iBssuxLI0jXN4DIwptGPcBWhLV389Hlsy4X5kmjVMh0L4dUqX9VC_dNDs32f_aKpUY7oK09lwWR_-dUsYnMz9NWJ2P4r_hE5ggTFB5Hy_c4sqovGeoERMO3eE1IgsErRUL_tuO_uXkbvqQugXJzYyrK8GlEsAJUJp8Yns1ZSIHWkE-11LGoSAhihJhihmW7SKXELnWieCnDTub3l0nmburjf8BqxXY_To9vzRGxWkmCebr7JCfDzwuGDgmVc7l9YEoW1T1GJJIg_Y3hmtmDtblA6hVzib4FXiVARdYnl8cS0mQc1duJWAVRf0JFY6iYUC6JkpupgMqDiTrQRmGOn0J5kfLgrBhn9kccWjHZKisYqt8Tkkgqkx24XTVjVJ6yvq1qE8bUdFKmUuoBD-IqqicFUBnqwsDsQwYIVa-efmXaQaq_ULKk8IVd43mxA2bOefu1Y3tZkH7e9EsBTRRstr8z905YcaU_P7zoLmHOJsA3GAhQi0JKJuOk4O9OiakUN6kDoz4HFJCwbd--y6F-K4HN8yI9m-XoJfAbr9vto7R831_yCc6sN8ZcSkTHYNHuHDbPFb3aMevn7JdS6D9CmpI4iwhekd7EcPsNlDDr3aE9x-TNO8bGa4Q945-VdJbdNt7Sl5fQcSac8il-uPmYPdoU8BCf0MIQEq1BoDoSZbquPxLMsvqfDe4yL-ONFBAkXo3GoWaZhUWNN3keFvxnwr_7fa2x4G2mch3utvApixq2ZFS3tACWTNn0jqrmqB6efnHiv9gwkKTZxt2nhNwZDWYu6P1a1JLBNYqi3JC2HxISY62dsBBNqotkZG5AU19gECSmdkvac69uOkoVGjIkkxb-4lcNo1dkWwLsVwFccNU8cgQCwHDniGbGGj6T5pkEyKRP7wl_CjxaMi2B9ZqAQP52=w2900-h1798",
  },
  {
    name: "Adies",
    body: "HII MAY apakabaar kangen bgt!! Happy birthday mayllo si gemini baik hati 😄😙💋💋💋 semoga km sehat selalu pj umurr, makinn pinter, makin sukses, makin cantik, bahagia selaluu, dilancarkan segala urusannya yaa may dan apapun yg km mau semoga terkabulkan dan diberi jalan sm Allah.. aamiinn2 love you maylloo!! Cepet nikah deh sm cowonya HAHAHA so cute kalian 🤍",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_FJtFzPBdaijiaYbzdUkmkC49FekuNn6SKZoAnS7qkN8MFdTutSLEL146qr9cRaeLxBO9iCIGYTSRd76pdTIggFALcK-jVuWRU5Sg7dt6G4HjDU0e2aObpKsmc7WtukpqOP9ZO-JfU00bkUNS93k6M8l5j1pUOx7msvFwGjFlQfhnYcmfEL8dJz4i1dwm4dIfMsTJmWhumFAOKqsoVM1ocZoFgmFKLqX7SWZQlXDdFWm43kNeVBwdovA1IVMWTOB5bhlYetu3Q2XjT9p_YNojpcTpRQtLlELVfaMaBH-giUUAsLZJkfKsXH4mCsrCoBP8YvTxLDiRVF8B0jDh1BbPjjF5IJpmVtnk0Fpa5zeVO3ku61Q4n_esoE-Sj-ZAPAGw7dh_b067IWoIUbKrOmXxvN2wHFwa9AhR2fz7ztKxlQ7PV1vtyciDzAavi88rMUjpThXoT7F5fbafhQ8TciIv_FLJ0TS8HeUWc37qXVvgYM7cXeU5m3heViZRyvkqQXmu6gZyDa7dn_am313WPR4c7jVMXALNHAcasQY3wrJXr8X0T9AbkXmWdaswBh4BaNjjB7TPNwjf4pfbTp63d5d0xGvD2p2tEgvPGkNb4E5-NtAEafqMbOuO_9blypps7unYp63rkYWCqg4UL_bsoHjLrczjgQySrD5mSx6jodr7enDgTPWMId4rIZ_0bbZRcfKXtAPweTd1HGzSJ-FuFgwasTgiZbpQkF8fjftQ_MnQHq1uUYZZClTLl7ZvDEWPUcZKUpW2PGcIjwVjX9vIARW_GvA2eS9grSTo5t3O6s8Y8daPZV3x1XJkvFrxNDsQYt2g4HEjjs3kCsNdHPe2nF-nEd2Jmlv_VMoia3NXBrpmsleDTngABCmASrt49m5CSqIjr2y1rSLpLt72EyM30DZIP6OaSW9K_zaCM-k1fzSc5QAtuwyZNExdQB5F3-pLin87o7VAJJ91mZFYW8SzEoSsSEBnuL5RngtKQREoNbMPjYMhUoFHiEooxeKEK6WbZFCcjxT87M_R-MloJRphZkM1GgkpmmfIsGL5Lp-nbHhPbVz1DB_pL1zCMGUqnKyFhh-Ai9wY4j9pjYv6v-SVEGLi0awa0QYWudCjDrsU3qwmqfyBLsLyetavwf6m977IAZERw-r_-mA8zBdXxpniCd5ps_3UfOG1SGACB0EFKIn_Ubgl21nnbP6PoRLs7iq7LL1_9UD5ej1IWEanOsQ1v6xBAZ_QCDQvnOl2JuYp4-y1VGnmewBKKzCdBSzgEO5ErGIqRYvOzYxp4_zGL7aM6RYsZBMRMM_ss7K00EJzQo4FhqDXjWzIM00NyLYQQFSe4tz4XwwxyeMHxdqla8WIo-00vpFGTtZpsVWrNcTP4cIL3sLgtcoTVByAYUgMc8Z9hUFPhb56Uq6t-G2--Vx3Qb49LwUQ7eDiUm1jIoPaTiq06HYdUs3OKFfiXMEUgOBNDaL6iXTTu8fj-fu2b65c0c2kX2HkabrnAVqwyGB9tmWUVrSBmRVWvpOdtVpXFZTqK93dTm_C1hyA-xr1Es06Ch6BllMlTRyU_dFLc6-T3eUn7MR_usOEgPGn3hzI8p_fN0YijaueEShpnjKaWs_AGsn6Q37PoRCCUI0NCnXAuTa0Ha04fE-5vMQGPthmfI0jtobmaw_AsuwrwjKonsuZhn0XORa2s=w1942-h1798",
  },
  {
    name: "Kay",
    body: "Mayllaaa happy birthday cantikkk!!! Semoga panjang umur, sehat selalu, diperbanyak rezeki dan dilancarkan segala urusannya yaa🫶🏻 thankyou udah mau jadi temen akuuu hehehe kangen bgt lohhh🥺 sehat sehat and take care ya disanaa ditunggu yaa main barengnya lagi sayanggg😘",
    img: "https://lh3.googleusercontent.com/fife/ALs6j_HskihV4ZE36GQW7fwmYgGk6Hcc8nVGChcKGGRNWW-3JmgpFwcG8C3W1f6ypX9mu-gp_f-u0Rtqxtrfwc6_RFYhRj-LegeGWEBauDccPR1QnJo3Krz28L95vY_maRq871VkdqnMni32FV8Eyn8ymVxbQLH_xmAlj51bnVgMjFjCz3Nwoq8kALLA1QLdBgBL8cxveYjMyKSMEwFmHg-bt16mtE3wgpBLH_2sN40kAhVnR7-sv3-eUQRpVJrkCGWtXfDdK2BXRZo_GvPkLArpUzJ1IdWfE8KoXlVG29gLICrNSjMRIvhhml9nQY47PDvSYnuH5d1RMC5zTRZpzGz71bWb4u4FIvF6uTlGEKKrfSMrEqwuiMvUnn1YUVyBC77JB5WOd3ZzeyhngxKpAUBpsLYVFdUCSsWOfODB4U84zeUUBKwyqdkFp30Gej9Q0sMIxNIOpUHtbIJnxIi6WqiTs5eIApifQhbE4TvMNmH9oeo3Gi8NZ7FvKP6x9srJ4lwux-1ZMKGZfwORY5w-4nQX4efdP1MG7SObhDDiurjx9i_pgDmLbmtPpFxOeRlF05hxm6TqHMjB9QPEyXosSCDGa-ieksHuHVaqhIQznwx0EmCUSpkOydJVoEP1m9QcENag5EIqnuLQpKvTuGbXrdIBpNvkMuOxdcOPvFwsDTkJlTmq8aWN46lZm69QUR-EybszmXUW4SpnRvpnvg-Ml5wVSqE5EPYe8elv9UUVaQ2yU7eLDkCa84hgo5_E8PZD81kLRkZN6fizjINXrBmLFB97ZAaciiH0nFux2t8orebtkeVdlNEvmkIbb34Mrhpg5YkQkWM8vNJKrzZf0pOjNoePgymcJxhJQWv0l_QTlfAshSS1c8vBsusrKSXmsuKK4-EGY9W7hg3rBcS4zlU9mTZ-WqGBcJgv-cH9TCu016qnqfeXt7oRGYih0pCkK5tYMgWxLBQdT4oY-1nFthLgMlJtMkXly2vmY0hZiDsWNbXLSDKC3g32aCqGroE656N_YoN_uPDHeJmYE4lJ4Yw=w2900-h1798-rw-v1",
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
