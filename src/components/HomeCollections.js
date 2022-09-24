import sasnal from '../assets/sasnal-krakow-warszawa.jpg';
import kozyra from '../assets/RZ-46_FOT-1.jpg';
import chrostkowska from '../assets/G-375_FOT-1.jpg';
import plakat from '../assets/WYS-1987-13_PLA.jpg';


export default function HomeCollections() {
  const collections = [
    {img: sasnal,
    title: 'NATURA',
  alt:'Obraz namalowany przez artystę na podstawie zdjęcia zrobionego jesienią z okna pociągu relacji Kraków – Warszawa. Monotonność wiejskiego pejzażu, znaczonego bruzdami zaoranych pól, zostaje przełamana pionową kreską słupa energetycznego oraz dynamiczną plamą kłębiącego się dymu. ',
      href:'#natura'
},
    {img: kozyra,
      title: 'DZIAŁANIE',
    alt:'Praca składająca się z wypchanych zwierząt (konia, psa, kota i koguta)miała zwrócić uwagę na ludzką hipokryzję w sprawie zabijania zwierząt i stawiała pytanie: dlaczego przemysłowe zabijanie na mięso, skórę i karmę jest społecznie akceptowane? Dlaczego człowiek nie dostrzega w tym indywidualnego cierpienia i śmierci konkretnego zwierzęcia? Czym jest śmierć i jakie miejsce zajmuje w życiu człowieka? Kozyra dotknęła sedna problemu, pokazała w sposób dosłowny, bardzo poruszający, jakie zło wyrządzają ludzie innym istotom.',
  href:'#dzialanie'},
      {img: chrostkowska,
        title: 'MIŁOŚĆ',
      alt: 'Właśnie w ramach tradycyjnych technik graficznych, w oparciu o «efekty» czysto graficzne, jak kreska, plama czerni i bieli, gra świateł i cieni — rozpoczęła swoje eksperymenty nad nową formą wypowiedzi plastycznej”14. Graficzka zastąpiła pejzaż realny metaforycznym w tonie pejzażem kosmicznym. Temat ten posłużył jej do odważnych rozwiązań formalnych z pogranicza abstrakcji.',
    href:'#milosc'},
        {img: plakat,
          title: 'SŁOWO',
          alt: 'Plakat z kotem. Sorry, ale już nie dam rady, więcej wymyślić opisów.',
        href:'#slowo'},
  ]
  return (
    <div className='collections-container'>
      <h2>PRZEGLĄDAJ GOTOWE ZBIORY</h2>
      <ul className='collections-wrap'>
        {collections.map(({img, title, alt, href}, i) => {
        return (<li key={i} className='collections-box' aria-label="przycisk zobacz kolekcję">
          <a href={href}>
            <img src={img} aria-description={alt} className='collections-box-img'/>
          <h4>{title}</h4>
          </a>
          
        </li>
        )})}
      </ul>
    </div>
  )
}
