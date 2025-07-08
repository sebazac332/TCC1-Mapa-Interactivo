import { useEffect, useRef, useState  } from "react";
import L from "leaflet";

const markerIcons = {
    alimentacao: L.icon({ iconUrl: "/icons/cutlery.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    informacao: L.icon({ iconUrl: "/icons/information.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    laboratorio: L.icon({ iconUrl: "/icons/microscope.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    salaAula: L.icon({ iconUrl: "/icons/teach.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    salaComputador: L.icon({ iconUrl: "/icons/computer.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    saude: L.icon({ iconUrl: "/icons/medical-symbol.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    biblioteca: L.icon({ iconUrl: "/icons/open-book.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    anfiteatro: L.icon({ iconUrl: "/icons/conference.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    caixa: L.icon({ iconUrl: "/icons/coin.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    lanchonete: L.icon({ iconUrl: "/icons/coffee.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    servicos: L.icon({ iconUrl: "/icons/wrench.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]}),
    vestidor: L.icon({ iconUrl: "/icons/changing-room.png", iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, 0]})
};

const markers = [
    //Marcadores para terreo
    //Marcadores para UAC
    {
    position: [-15.98903, -48.04506],
    popup: "Lanchonete Obelisco",
    categoria: "lanchonete",
    andar: "Térreo"
    },
    {
    position: [-15.98895, -48.04496],
    popup: "Secretaria/coordenação",
    categoria: "informacao",
    andar: "Térreo",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    position: [-15.9892, -48.04478],
    popup: "Auditório entrada térreo",
    categoria: "anfiteatro",
    andar: "Térreo"
    },
    {
    position: [-15.9889, -48.0448],
    popup: "Biblioteca da Faculdade do Gama",
    categoria: "biblioteca",
    andar: "Térreo"
    },
    {
    position: [-15.98894, -48.04476],
    popup: "Sala I-1",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.98895, -48.04471],
    popup: "Sala I-2",
    categoria: "salaComputador",
    andar: "Térreo"
    },
    {
    position: [-15.98898, -48.04468],
    popup: "Sala I-3",
    categoria: "salaComputador",
    andar: "Térreo"
    },
    {
    position: [-15.98903, -48.04466],
    popup: "Sala I-4",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.98906, -48.04463],
    popup: "Sala I-5",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.98909, -48.04458],
    popup: "Sala I-6",
    categoria: "salaComputador",
    andar: "Térreo"
    },
    {
    position: [-15.98912, -48.04455],
    popup: "Sala I-7",
    categoria: "salaComputador",
    andar: "Térreo"
    },
    {
    position: [-15.98917, -48.04452],
    popup: "Sala I-8",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.98921, -48.04449],
    popup: "Sala I-9",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.98941, -48.04467],
    popup: "Sala I-10",
    categoria: "salaComputador",
    andar: "Térreo"
    },
    //Marcadores para UED
    {
    position: [-15.98947, -48.04558],
    popup: "Gestão de Pessoas",
    categoria: "informacao",
    andar: "Térreo"
    },
    {
    position: [-15.98945, -48.04556],
    popup: "Núcleo de Atenção à Saúde",
    categoria: "saude",
    andar: "Térreo"
    },
    {
    position: [-15.98942, -48.04553],
    popup: "Compras",
    categoria: "informacao",
    andar: "Térreo"
    },
    {
    position: [-15.9894, -48.0455],
    popup: "Administração",
    categoria: "informacao",
    andar: "Térreo"
    },
    {
    position: [-15.98938, -48.04548],
    popup: "Vestiário",
    categoria: "vestidor",
    andar: "Térreo"
    },
    {
    position: [-15.98953, -48.04534],
    popup: "Entrada MOCAP",
    categoria: "anfiteatro",
    andar: "Térreo"
    },
    {
    position: [-15.98947, -48.04545],
    popup: "Saída MOCAP",
    categoria: "anfiteatro",
    andar: "Térreo"
    },
    {
    position: [-15.98964, -48.04538],
    popup: "Laboratório Quimica",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98976, -48.04553],
    popup: "Lab. de Caracterização de Materiais",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.9898, -48.04558],
    popup: "Laboratório de Electricidade",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98985, -48.04564],
    popup: "Laboratorio Fisica II",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98991, -48.0457],
    popup: "Laboratorio Fisica I",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98979, -48.04591],
    popup: "Sala dos Técnicos",
    categoria: "servicos",
    andar: "Térreo"
    },
    {
    position: [-15.98972, -48.04587],
    popup: "Laboratório de Eletrônica NEI 1",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98967, -48.04581],
    popup: "Laboratório de Eletrônica NEI 2",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98958, -48.04572],
    popup: "Laboratório de Software e Simulação",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98964, -48.0456],
    popup: "Laboratório de Termofluidos",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    //Marcadores para MESP
    {
    position: [-15.98946, -48.04411],
    popup: "Área de refeição",
    categoria: "alimentacao",
    andar: "Térreo"
    },
    {
    position: [-15.98952, -48.04404],
    popup: "Caixa RU",
    categoria: "caixa",
    andar: "Térreo"
    },
    //Marcadores para LTDA
    {
    position: [-15.9903, -48.04433],
    popup: "Sala-101/Nanotechnologia",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99037, -48.04433],
    popup: "Sala-102/Gmec",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99042, -48.04434],
    popup: "Sala-103/CAB",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99048, -48.04434],
    popup: "Sala-104/Laboratorio de estructuras aeroespaciais",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99058, -48.04434],
    popup: "Sala-105",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99065, -48.04431],
    popup: "Sala-106/Sala dos tecnicos",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99058, -48.04427],
    popup: "Sala-107/Laboratório de processos de fabricação",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99053, -48.04427],
    popup: "Sala-108/LASE",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99048, -48.04427],
    popup: "Sala-109/Laboratório de acústica e vibrações",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.9904, -48.04427],
    popup: "Sala-110/Laboratório de tribologia",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.99034, -48.04427],
    popup: "Sala-111/LTBIO",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    //Outros Marcadores
    {
    position: [-15.98991, -48.04522],
    popup: "Laboratório de pesquisa",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98972, -48.045],
    popup: "LADES",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98986, -48.04488],
    popup: "ALab",
    categoria: "laboratorio",
    andar: "Térreo"
    },
    {
    position: [-15.98975, -48.04475],
    popup: "Container N17",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.99083, -48.04436],
    popup: "Laboratório de soldagem",
    categoria: "salaAula",
    andar: "Térreo"
    },
    {
    position: [-15.99083, -48.04424],
    popup: "Laboratório de fundição",
    categoria: "salaAula",
    andar: "Térreo"
    },
    //Marcadores para 1 andar
    //Marcadores para UAC
    {
    position: [-15.98894, -48.04476],
    popup: "Sala S-1",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98895, -48.04471],
    popup: "Sala S-2",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98898, -48.04468],
    popup: "Sala S-3",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98903, -48.04466],
    popup: "Sala S-4",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98906, -48.04463],
    popup: "Sala S-5",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98909, -48.04458],
    popup: "Sala S-6",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98912, -48.04455],
    popup: "Sala S-7",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98917, -48.04452],
    popup: "Sala S-8",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98921, -48.04449],
    popup: "Sala S-9",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98941, -48.04467],
    popup: "Sala S-10",
    categoria: "salaComputador",
    andar: "1 andar"
    },
    {
    position: [-15.98892, -48.04494],
    popup: "Sala Multiuso",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98896, -48.04499],
    popup: "CODECA/DASU",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.989, -48.04504],
    popup: "CPD",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.98909, -48.04501],
    popup: "Auditório entrada primeiro andar",
    categoria: "anfiteatro",
    andar: "1 andar"
    },
    //Marcadores para UED
    //Marcadores para LTDA
    {
    position: [-15.99028, -48.04436],
    popup: "Sala-201/Sala de reunião",
    categoria: "salaAula",
    andar: "1 andar"
    },
    {
    position: [-15.99032, -48.04427],
    popup: "Sala-202/LATAME",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99038, -48.04427],
    popup: "Sala-203/LOPRREN",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99044, -48.04427],
    popup: "Sala-204",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99049, -48.04427],
    popup: "Sala-205",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99053, -48.04427],
    popup: "Depósito",
    categoria: "servicos",
    andar: "1 andar"
    },
    {
    position: [-15.99053, -48.04434],
    popup: "SALA-206",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99046, -48.04433],
    popup: "Sala-207",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    {
    position: [-15.99036, -48.04433],
    popup: "Sala-208",
    categoria: "laboratorio",
    andar: "1 andar"
    },
    //Marcadores para 2 andar
    //Marcadores para LTDA
    {
    position: [-15.99032, -48.04434],
    popup: "Sala-301/Sala de reunião",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99036, -48.04434],
    popup: "Sala-302",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.9904, -48.04434],
    popup: "Sala-303",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99044, -48.04434],
    popup: "Sala-304",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99048, -48.04434],
    popup: "Sala-305",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99052, -48.04434],
    popup: "Sala-306",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99056, -48.04434],
    popup: "Sala-307",
    categoria: "salaAula",
    andar: "2 andar"
    },
    {
    position: [-15.99056, -48.04427],
    popup: "Deposito",
    categoria: "servicos",
    andar: "2 andar"
    },
    {
    position: [-15.99052, -48.04428],
    popup: "Sala-310/CEDIS",
    categoria: "laboratorio",
    andar: "2 andar"
    },
    {
    position: [-15.99048, -48.04428],
    popup: "Sala-311/ALab",
    categoria: "laboratorio",
    andar: "2 andar"
    },
    {
    position: [-15.99043, -48.04427],
    popup: "Sala-312/ITRAC",
    categoria: "laboratorio",
    andar: "2 andar"
    },
    {
    position: [-15.99034, -48.04428],
    popup: "Sala-313",
    categoria: "salaAula",
    andar: "2 andar"
    }
];

export default function CampusMap1() {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const userMarkerRef = useRef(null);
    const userCircleRef = useRef(null);

    const options = {
    enableHighAccuracy: true, 
    timeout: 10000, 
    maximumAge: 2000, 
    };

    const [filtros, setFiltros] = useState({
        alimentacao: true,
        informacao: true,
        laboratorio: true,
        salaAula: true,
        salaComputador: true,
        saude: true,
        biblioteca: true,
        anfiteatro: true,
        caixa: true,
        lanchonete: true,
        servicos: true,
        vestidor: true
    });

    const [andarVisivel, setAndarVisivel] = useState("Térreo");

    useEffect(() => {
        if (mapContainerRef.current && !mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapContainerRef.current, {
                maxZoom: 19,
                minZoom: 16,
            }).setView([-15.989549, -48.044707], 19);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mapInstanceRef.current);
        }
    }, []);

    useEffect(() => {
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];

        const andares = {};

        markers
            .filter(m => filtros[m.categoria])
            .forEach(m => {
                if (!filtros[m.categoria]) return;

                if (!andares[m.andar]) {
                    andares[m.andar] = L.layerGroup();
                }

                const conteudoPopup = `
                <div style="width:200px;">
                    <h4 style="margin:0;">${m.popup}</h4>
                    ${m.imagem ? `<img src="${m.imagem}" alt="${m.popup}" style="width:100%; margin-top:5px; border-radius:5px;" />` : ''}
                    ${m.descricao ? `<p style="margin:5px 0;">${m.descricao}</p>` : ''}
                </div>
                `;   

                const icon = markerIcons[m.categoria] || markerIcons.outros;
                const marker = L.marker(m.position, { icon }).bindPopup(conteudoPopup);
                marker.addTo(andares[m.andar]);
                markersRef.current.push(marker);
            });

        if (mapInstanceRef.current._layerControl) {
            mapInstanceRef.current.removeControl(mapInstanceRef.current._layerControl);
        }

        Object.values(andares).forEach(group => {
            if (mapInstanceRef.current.hasLayer(group)) {
                mapInstanceRef.current.removeLayer(group);
            }
        });

        if (andares[andarVisivel]) {
            andares[andarVisivel].addTo(mapInstanceRef.current);
        }

        const layersControl = L.control.layers(andares, null, { collapsed: false }).addTo(mapInstanceRef.current);
        mapInstanceRef.current._layerControl = layersControl;

        mapInstanceRef.current.on('layeradd', (e) => {
            for (const [nomeAndar, layer] of Object.entries(andares)) {
                if (e.layer === layer) {
                    setAndarVisivel(nomeAndar);
                    break;
                }
            }
        });


    }, [filtros]);

    useEffect(()=>{
        function success(pos){

            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const accuracy = pos.coords.accuracy;

            if(userMarkerRef.current){
                mapInstanceRef.current.removeLayer(userMarkerRef.current);
                mapInstanceRef.current.removeLayer(userCircleRef.current);
            }

            userMarkerRef.current = L.marker([lat, lng]).bindPopup("Você está aqui").addTo(mapInstanceRef.current);
            userCircleRef.current = L.circle([lat, lng],{ radius:accuracy, interactive: false }).addTo(mapInstanceRef.current);
        }

        function error(err){

            if (err.code === 1){
                alert("Por favor ative a geolocalização")
            } else {
                alert("Localização atual não pode ser obtida")
            }
        }

        const watchId = navigator.geolocation.watchPosition(success, error, options);

        return () => navigator.geolocation.clearWatch(watchId);
    },[]);

    const toggleFiltro = (categoria) => {
        setFiltros(prev => ({
            ...prev,
            [categoria]: !prev[categoria]
        }));
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "150px", marginRight: "100px" }}>
                <h3>Filtros</h3>
                {Object.keys(filtros).map((cat) => (
                    <div key={cat}>
                        <label>
                            <input
                                type="checkbox"
                                checked={filtros[cat]}
                                onChange={() => toggleFiltro(cat)}
                            />
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </label>
                    </div>
                ))}
            </div>

            <div ref={mapContainerRef} style={{ height: "800px", width: "1000px" }} />
        </div>
    );
}
