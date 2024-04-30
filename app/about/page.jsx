export const metadata = {
  metadataBase: new URL("https://enterurl"),
  alternates: {
    canonical: "/mika-fronttivinkit",
    languages: {
      "fi-FI": "/fi-FI",
    },
  },
  title: "Fronttivinkit — Mikä Fronttivinkit?",
  description: "Tietoa fronttivinkeistä ja tarinasta sen taustalla.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function About() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          Mikä <span className="text-light-gray">Fronttivinkit?</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4  leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
            <span>
              Olin ensiksi luomassa sivustoa englanniksi, mutta vastaavia
              sivustoja on liikaakin tarjolla, joten päätin ottaa kieleksi
              Suomen, sillä suomenkielisiä blogeja/oppaita on varsin vähän, tai
              niitä on päivitetty viimeksi useita vuosia sitten. 
            </span>
            <span>
              Pääasiallinen tarkoitus on syventyä itse uusiin tai vanhempiinkin
              aiheisiin ja toivoa, että lukijat saisivat samalla hyötyä
              kirjoittamistani vinkeistä. Sisältö pyörii pääasiassa frontti- ja
              webbikehityksen ympärillä.
            </span>
        </p>
      </div>
    </div>
  );
}
