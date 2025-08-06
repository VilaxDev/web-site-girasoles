import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Clock,
  Users,
  Utensils,
  TreePine,
  Waves,
  Star,
  ChefHat,
  Calendar,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/image-remove.png"
                  alt="Los Girasoles Logo"
                  className="h-16 w-auto object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#inicio"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Inicio
                </a>
                <a
                  href="#menu"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Menú
                </a>
                <a
                  href="#instalaciones"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Instalaciones
                </a>
                <a
                  href="#nosotros"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Nosotros
                </a>
                <a
                  href="#contacto"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-green-700 hover:text-yellow-600 focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg">
              <a
                href="#inicio"
                className="text-green-700 hover:text-yellow-600 block px-3 py-3 text-base font-semibold hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                Inicio
              </a>
              <a
                href="#menu"
                className="text-green-700 hover:text-yellow-600 block px-3 py-3 text-base font-semibold hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                Menú
              </a>
              <a
                href="#instalaciones"
                className="text-green-700 hover:text-yellow-600 block px-3 py-3 text-base font-semibold hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                Instalaciones
              </a>
              <a
                href="#nosotros"
                className="text-green-700 hover:text-yellow-600 block px-3 py-3 text-base font-semibold hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="text-green-700 hover:text-yellow-600 block px-3 py-3 text-base font-semibold hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/60"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.inicio
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8 animate-bounce">
              <img
                src="/image-remove.png"
                alt="Los Girasoles"
                className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 leading-relaxed font-light">
                <span className="text-yellow-300 font-bold animate-pulse">
                  LA TRADICIÓN
                </span>
                ,<span className="italic text-yellow-200 mx-2">diversión</span>
                <span className="text-white">Y</span>
                <span className="text-yellow-300 font-bold animate-pulse ml-2">
                  SABOR DE SIEMPRE
                </span>
              </p>
              <p className="text-xl text-green-100 mb-12 font-light">
                Descubre la auténtica experiencia gastronómica en un ambiente
                familiar y natural
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#menu"
                  className="group bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center">
                    <ChefHat
                      className="mr-2 group-hover:animate-bounce"
                      size={20}
                    />
                    Ver Menú
                  </span>
                </a>
                <a
                  href="#contacto"
                  className="group bg-transparent border-3 border-white text-white hover:bg-white hover:text-green-700 font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center">
                    <Calendar
                      className="mr-2 group-hover:animate-pulse"
                      size={20}
                    />
                    Reservar Mesa
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-10 h-10 bg-yellow-400 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-10 w-4 h-4 bg-green-300 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-24 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.menu
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-green-700 mb-6">
              Nuestro Menú
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deliciosos platos tradicionales preparados con ingredientes
              frescos y recetas familiares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Cuy al Horno",
                description:
                  "Cuy tradicional al horno con papas doradas y salsa criolla",
                price: "S/ 85.00",
                image: "/cuy-colorado.jpg",
                rating: 5,
              },
              {
                title: "Pachamanca",
                description:
                  "Plato típico con carnes variadas, papas y habas cocidas bajo tierra",
                price: "S/ 45.00",
                image: "/pachamanca.jpg",
                rating: 5,
              },
              {
                title: "Trucha Frita",
                description:
                  "Trucha fresca del río acompañada de arroz y ensalada",
                price: "S/ 35.00",
                image: "/trucha.jpg",
                rating: 4,
              },
              {
                title: "Caldo de Gallina",
                description: "Sopa caliente de gallina con fideos y verduras",
                price: "S/ 25.00",
                image: "/caldo-gallina.jpg",
                rating: 5,
              },
              {
                title: "Chicharrón de Cerdo",
                description: "Chicharrón crujiente con camote y salsa criolla",
                price: "S/ 38.00",
                image: "/chicharon.jpg",
                rating: 4,
              },
              {
                title: "Pollo a la Brasa",
                description:
                  "Pollo entero a la brasa con papas fritas y ensalada",
                price: "S/ 42.00",
                image: "/pollo-brasa.jpg",
                rating: 5,
              },
            ].map((dish, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.menu
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < dish.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-600 transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">
                      {dish.price}
                    </span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Ordenar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section
        id="instalaciones"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.instalaciones
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-green-700 mb-6">
              Nuestras Instalaciones
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Disfruta de amplios espacios al aire libre, piscina y áreas
              recreativas para toda la familia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Waves className="w-12 h-12 text-white" />,
                title: "Piscina",
                description: "Piscina amplia y segura para toda la familia",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <Utensils className="w-12 h-12 text-green-300" />,
                title: "Comedor al Aire Libre",
                description: "Amplios comedores con vista al campo",
                color: "from-green-400 to-green-600",
              },
              {
                icon: <TreePine className="w-12 h-12 text-white" />,
                title: "Jardines",
                description: "Hermosos jardines y áreas verdes naturales",
                color: "from-emerald-400 to-emerald-600",
              },
              {
                icon: <Users className="w-12 h-12 text-yellow-300" />,
                title: "Salón de Eventos",
                description: "Espacios para celebraciones y eventos especiales",
                color: "from-yellow-400 to-yellow-600",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.instalaciones
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${facility.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-3 group-hover:text-green-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${
                isVisible.instalaciones
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src="/piscina.jpg"
                alt="Piscina Familiar"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Piscina Familiar</h3>
                <p className="text-blue-100">
                  Disfruta de un refrescante baño en nuestra piscina con área
                  para niños y adultos
                </p>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${
                isVisible.instalaciones
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src="/juegos.jpg"
                alt="Área de Juegos"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Área de Juegos</h3>
                <p className="text-green-100">
                  Espacios recreativos seguros para que los niños se diviertan
                </p>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${
                isVisible.instalaciones
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <img
                src="/eventos.jpg"
                alt="Eventos Especiales"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Eventos Especiales</h3>
                <p className="text-yellow-100">
                  Celebra tus momentos especiales en nuestros salones de eventos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className="py-24 bg-gradient-to-br from-green-50 to-yellow-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.nosotros
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-5xl font-bold text-green-700 mb-8">
                Nuestra Historia
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Desde hace más de 20 años, Los Girasoles ha sido el lugar
                preferido de las familias para disfrutar de la auténtica
                gastronomía peruana en un ambiente campestre único.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ubicados en el corazón de Azapampa, Chilca, ofrecemos una
                experiencia gastronómica que combina tradición, sabor y
                diversión en un entorno natural incomparable.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-green-600 mb-2 animate-pulse">
                    20+
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Años de Experiencia
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-green-600 mb-2 animate-pulse">
                    1000+
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Familias Satisfechas
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible.nosotros
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Los Girasoles Restaurant"
                  className="w-96 h-96 mx-auto rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-full"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-green-700 font-bold text-3xl">🌻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-24 bg-gradient-to-br from-green-700 via-green-600 to-green-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.contacto
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Contáctanos</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Estamos listos para atenderte. Ven y vive la experiencia Los
              Girasoles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="w-12 h-12 text-yellow-400" />,
                title: "Dirección",
                content: "Calle Real N°1820\nAzapampa - Chilca",
                delay: "0ms",
              },
              {
                icon: <Phone className="w-12 h-12 text-yellow-400" />,
                title: "Teléfono",
                content: "+51 991 541 545\n+51 991 541 545",
                delay: "150ms",
              },
              {
                icon: <Clock className="w-12 h-12 text-yellow-400" />,
                title: "Horarios",
                content: "Lunes - Domingo\n8:00 AM - 8:00 PM",
                delay: "300ms",
              },
              {
                icon: <Users className="w-12 h-12 text-yellow-400" />,
                title: "Reservas",
                content: "Eventos Especiales\nCelebraciones Familiares",
                delay: "450ms",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.contacto
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: contact.delay }}
              >
                <div className="mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {contact.title}
                </h3>
                <p className="text-green-100 whitespace-pre-line leading-relaxed">
                  {contact.content}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+51991541545"
              className="group inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Phone className="mr-3 group-hover:animate-pulse" size={20} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-green-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/image-remove.png"
                alt="Los Girasoles Logo"
                className="h-16 w-auto object-contain mr-4"
              />
            </div>
            <p className="text-green-200 mb-8 text-lg">
              Restaurant Campestre - Tradición, Diversión y Sabor de Siempre
            </p>
            <div className="border-t border-green-700 pt-8">
              <p className="text-green-300">
                &copy; 2025 Los Girasoles Restaurant Campestre. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
