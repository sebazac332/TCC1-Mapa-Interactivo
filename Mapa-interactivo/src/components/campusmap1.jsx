import { useEffect, useRef } from "react";
import L from "leaflet";

export default function CampusMap1() {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (mapContainerRef.current && !mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapContainerRef.current).setView([-15.989549, -48.044707], 19);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mapInstanceRef.current);

            //Icono para marcadores

            const lanchoneteIcon = L.icon({
                iconUrl: "/icons/coffee.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const informacaoIcon = L.icon({
                iconUrl: "/icons/information.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const aulaIcon = L.icon({
                iconUrl: "/icons/teach.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const aulaCompuIcon = L.icon({
                iconUrl: "/icons/computer.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const bibliotecaIcon = L.icon({
                iconUrl: "/icons/open-book.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const anfiteatroIcon = L.icon({
                iconUrl: "/icons/conference.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const labIcon = L.icon({
                iconUrl: "/icons/microscope.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const saudeIcon = L.icon({
                iconUrl: "/icons/medical-symbol.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const vestiarioIcon = L.icon({
                iconUrl: "/icons/changing-room.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const caixaIcon = L.icon({
                iconUrl: "/icons/coin.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const comidaIcon = L.icon({
                iconUrl: "/icons/cutlery.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

            const mantenimentoIcon = L.icon({
                iconUrl: "/icons/wrench.png",
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            });

        const markers = [
                //Marcadores para UAC
                {
                    position: [-15.98903, -48.04506],
                    popup: "Lanchonete Obelisco",
                    icon: lanchoneteIcon
                },
                {
                    position: [-15.98895, -48.04496],
                    popup: "Secretaria/coordenação",
                    icon: informacaoIcon
                },
                {
                    position: [-15.9892, -48.04478],
                    popup: "Anfiteatro entrada térreo",
                    icon: anfiteatroIcon
                },
                {
                    position: [-15.9889, -48.0448],
                    popup: "Biblioteca da Faculdade do Gama",
                    icon: bibliotecaIcon
                },
                {
                    position: [-15.98894, -48.04476],
                    popup: "Sala S-1",
                    icon: aulaIcon
                },
                {
                    position: [-15.98895, -48.04471],
                    popup: "Sala S-2",
                    icon: aulaCompuIcon
                },
                {
                    position: [-15.98898, -48.04468],
                    popup: "Sala S-3",
                    icon: aulaCompuIcon
                },
                {
                    position: [-15.98903, -48.04466],
                    popup: "Sala S-4",
                    icon: aulaIcon
                },
                {
                    position: [-15.98906, -48.04463],
                    popup: "Sala S-5",
                    icon: aulaIcon
                },
                {
                    position: [-15.98909, -48.04458],
                    popup: "Sala S-6",
                    icon: aulaCompuIcon
                },
                {
                    position: [-15.98912, -48.04455],
                    popup: "Sala S-7",
                    icon: aulaCompuIcon
                },
                {
                    position: [-15.98917, -48.04452],
                    popup: "Sala S-8",
                    icon: aulaIcon
                },
                {
                    position: [-15.98921, -48.04449],
                    popup: "Sala S-9",
                    icon: aulaIcon
                },
                {
                    position: [-15.98941, -48.04467],
                    popup: "Sala S-10",
                    icon: aulaCompuIcon
                },
                //Marcadores para UED
                {
                    position: [-15.98947, -48.04558],
                    popup: "Gestão de Pessoas",
                    icon: informacaoIcon
                },
                {
                    position: [-15.98945, -48.04556],
                    popup: "Núcleo de Atenção à Saúde",
                    icon: saudeIcon
                },
                {
                    position: [-15.98942, -48.04553],
                    popup: "Compras",
                    icon: informacaoIcon
                },
                {
                    position: [-15.9894, -48.0455],
                    popup: "Administração",
                    icon: informacaoIcon
                },
                {
                    position: [-15.98938, -48.04548],
                    popup: "Vestiário",
                    icon: vestiarioIcon
                },
                {
                    position: [-15.98953, -48.04534],
                    popup: "Entrada anfiteatro MOCAP",
                    icon: anfiteatroIcon
                },
                {
                    position: [-15.98947, -48.04545],
                    popup: "Saída anfiteatro MOCAP",
                    icon: anfiteatroIcon
                },
                {
                    position: [-15.98964, -48.04538],
                    popup: "Laboratório Quimica",
                    icon: labIcon
                },
                {
                    position: [-15.98976, -48.04553],
                    popup: "Lab. de Caracterização de Materiais",
                    icon: labIcon
                },
                {
                    position: [-15.9898, -48.04558],
                    popup: "Laboratório de Electricidade",
                    icon: labIcon
                },
                {
                    position: [-15.98985, -48.04564],
                    popup: "Laboratorio Fisica II",
                    icon: labIcon
                },
                {
                    position: [-15.98991, -48.0457],
                    popup: "Laboratorio Fisica I",
                    icon: labIcon
                },
                {
                    position: [-15.98979, -48.04591],
                    popup: "Sala dos Técnicos",
                    icon: mantenimentoIcon
                },
                {
                    position: [-15.98972, -48.04587],
                    popup: "Laboratório de Eletrônica NEI 1",
                    icon: labIcon
                },
                {
                    position: [-15.98967, -48.04581],
                    popup: "Laboratório de Eletrônica NEI 2",
                    icon: labIcon
                },
                {
                    position: [-15.98958, -48.04572],
                    popup: "Laboratório de Software e Simulação",
                    icon: labIcon
                },
                {
                    position: [-15.98964, -48.0456],
                    popup: "Laboratório de Termofluidos",
                    icon: labIcon
                },
                //Marcadores para MESP
                {
                    position: [-15.98946, -48.04411],
                    popup: "Área de refeição",
                    icon: comidaIcon
                },
                {
                    position: [-15.98952, -48.04404],
                    popup: "Caixa RU",
                    icon: caixaIcon
                }
            ];

            markers.forEach(({ position, popup, icon }) => {
                L.marker(position, icon ? {icon} : {})
                    .addTo(mapInstanceRef.current)
                    .bindPopup(popup);
            });
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return <div ref={mapContainerRef} style={{ height: "800px", width: "1000px" }} />;
}
