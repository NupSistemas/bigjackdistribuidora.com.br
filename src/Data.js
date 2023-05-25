import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "./assets/cerveja-va-bene2.png";
import work2 from "./assets/cerveja-gato-preto.png";
import work3 from "./assets/cerveja-dote.png";
import work4 from "./assets/choop.png";
import work5 from "./assets/choopAmerican.png";
import work6 from "./assets/bone-feminino.png";

export const navLinks = ["home", "sobre", "serviços", "produtos", "contato"]

export const socialIconsFooter = [
  <FaInstagram />,
  <FaFacebook />,
  <FaYoutube />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Nome",
    value: "Darlan"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "4896106015"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "darlan@bigjackdistribuidora.com.br"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const clientesFixos = [
  {
    id: 1,
    year: "1",
    position: "Chopeiras",
    company: "Entrega e instalação de chopeiras."
  },
  {
    di: 2,
    year: "2",
    position: "Choop",
    company: "Entrega e instalação de Choop"
  },
  {
    id: 3,
    year: "3",
    position: "Geladeiras",
    company: "Entrega e instalação de Geladeiras"
  },
  {
    id: 4,
    year: "4",
    position: "Câmera Fria",
    company: "Entrega e instalação de Câmera Fria"
  }
]

export const deliverys = [
  {
    id: 1,
    year: "1",
    position: "Chopeiras",
    company: "Entrega e instalação de chopeiras."
  },
  {
    di: 2,
    year: "2",
    position: "Choop",
    company: "Entrega e instalação de Choop"
  },
  {
    id: 3,
    year: "3",
    position: "Copos Descartáveis",
    company: "Entrega e de Copos Descartáveis"
  }
]

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "Cervejas"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "Cervejas"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "Cervejas"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "Choop"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'Choop'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "Acessórios"
  }
]


export const workNavs = [
  "Todos", "Cervejas", "Choop", "Acessórios"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Ruan Antonio da Silva Cascaes, Orleans-SC",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "darlan@bigjackdistribuidora.com.br"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "4896106015"
  }
]
