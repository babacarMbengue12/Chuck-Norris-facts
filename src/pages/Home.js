import React from "react";
import _ from "lodash";
import Card from "../components/Card";
const IMAGES = [
  "https://file1.grazia.fr/var/grazia/storage/images/1/2/6/3/0/12630235/100-choses-vaut-mieux-savoir-sur-chuck-norris-ans-sinon-fache.jpg?alias=original",
  "https://belgium-iphone.lesoir.be/wp-content/uploads/sites/73/2017/04/chuck-norris.jpg",
  "https://ds1.static.rtbf.be/article/image/370x208/8/a/a/228669109aa3ab1b4ec06b7722efb105-1551709003.jpg",
  "https://www.lesuricate.org/wp-content/uploads/2019/04/chuck-norris-fusil.jpg",
  "https://fr.web.img6.acsta.net/r_1280_720/newsv7/20/03/09/16/04/1278996.jpg",
  "https://i.f1g.fr/media/ext/299x250/image3.evene.fr/files/celebrity/53310.jpg",
  "https://cdn-s-www.leprogres.fr/images/86090E57-D618-4071-BC27-81FB9B502BC4/NW_raw/l-acteur-de-80-ans-a-appele-a-soutenir-les-commercants-locaux-photo-jerry-markland-getty-images-north-america-afp-1609789883.jpg",
  "https://www.arcinfo.ch/media/image/13/normal_16_9/chuck_norris.png",
  "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F12.2F07.2F4cff230b-512f-4b1d-abbb-90bf253fa9f2.2Ejpeg/345x258/quality/80/crop-from/center/chuck-norris.jpeg",
  "https://img.huffingtonpost.com/asset/5c93b2092a0000ba024f4f44.jpeg?ops=scalefit_630_noupscale",
];
const Home = () => {
  const images = _.shuffle(IMAGES);
  const items = _.range(0, 10);
  return (
    <div>
      <h1 className="text-center mt-4">Chuck Norris facts</h1>
      <div className="row align-items-stretch">
        {items.map((item) => {
          return <Card key={item} img={images[item]} />;
        })}
      </div>
    </div>
  );
};

export default Home;
