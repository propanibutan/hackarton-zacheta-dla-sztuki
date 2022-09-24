import HomeCTABox from "./HomeCTABox";
import akshan from '../assets/ashkanForouzaniM0l9NBCivukUnsp.jpeg';
import jessica from '../assets/jessicaRuscelloGUyf8ZCTHMUnspl.jpeg';
import plakat from '../assets/kot.png';


export default function HomeCallToAction() {
  const cta= [
    { img: akshan,
    title: 'Wypróbuj nasze inspirujące mini-gry',
  descr: 'Wierzymy w interdycyplinarną edukację opartą na emocjach, ciekawości i zabawie. Nasze gry pozwalają zainspirować edukatorów różnych przedmiotów i poziomów. ',
alt: 'sciana'},
  { img: jessica,
    title: 'Stwórz własne kolekcje',
  descr: 'Umożliwiamy stworzenie własnych kolekcji sztuki, które możesz personalizować i sharować z innymi. Twórz nowe połączenia i sensy, baw się sztuką, inspiruj się kolekcjami innych. ',
alt:'ramy obrazów'},
  { img: plakat,
    title: 'Doświadczaj wirtualnej sztuki bez granic',
  descr: 'Umożlwiamy dostęp do ogromnej bazy obiektów w doskonałej jakości. Dbamy o to, żeby wszyscy czuli się u nas dobrze. Zapewniamy autodeskrypcję, napisy i gry dla neuroróżnorodnej społeczności.',
alt:'rece'},
  ]

  return (
    <div className="cta-container">
      {cta.map(({img, title, descr, alt}, i) => {
        return (
          <HomeCTABox key={i} img={img} title={title} descr={descr} alt={alt}/>
        )
      })}
    </div>
  )
}
