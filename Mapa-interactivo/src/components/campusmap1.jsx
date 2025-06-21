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

        const markers = [
                //Marcadores para UAC
                {
                    position: [-15.98903, -48.04506],
                    popup: "Lanchonete Obelisco"
                },
                {
                    position: [-15.98895, -48.04496],
                    popup: "Secretaria/coordenação"
                },
                {
                    position: [-15.9892, -48.04478],
                    popup: "Anfiteatro entrada térreo"
                },
                {
                    position: [-15.9889, -48.0448],
                    popup: "Biblioteca da Faculdade do Gama"
                },
                {
                    position: [-15.98894, -48.04476],
                    popup: "Sala S-1"
                },
                {
                    position: [-15.98895, -48.04471],
                    popup: "Sala S-2"
                },
                {
                    position: [-15.98898, -48.04468],
                    popup: "Sala S-3"
                },
                {
                    position: [-15.98903, -48.04466],
                    popup: "Sala S-4"
                },
                {
                    position: [-15.98906, -48.04463],
                    popup: "Sala S-5"
                },
                {
                    position: [-15.98909, -48.04458],
                    popup: "Sala S-6"
                },
                {
                    position: [-15.98912, -48.04455],
                    popup: "Sala S-7"
                },
                {
                    position: [-15.98917, -48.04452],
                    popup: "Sala S-8"
                },
                {
                    position: [-15.98921, -48.04449],
                    popup: "Sala S-9"
                },
                {
                    position: [-15.98941, -48.04467],
                    popup: "Sala S-10"
                },
                //Marcadores para UED
                {
                    position: [-15.98947, -48.04558],
                    popup: "Gestão de Pessoas"
                },
                {
                    position: [-15.98945, -48.04555],
                    popup: "Núcleo de Atenção à Saúde"
                },
                {
                    position: [-15.98942, -48.04553],
                    popup: "Compras"
                },
                {
                    position: [-15.9894, -48.0455],
                    popup: "Administração"
                },
                {
                    position: [-15.98938, -48.04548],
                    popup: "Vestiário"
                },
                {
                    position: [-15.98953, -48.04534],
                    popup: "Entrada anfiteatro MOCAP"
                },
                {
                    position: [-15.98947, -48.04545],
                    popup: "Saída anfiteatro MOCAP"
                },
                {
                    position: [-15.98964, -48.04538],
                    popup: "Laboratório Quimica"
                },
                {
                    position: [-15.98976, -48.04553],
                    popup: "Lab. de Caracterização de Materiais"
                },
                {
                    position: [-15.9898, -48.04558],
                    popup: "Laboratório de Electricidade"
                },
                {
                    position: [-15.98985, -48.04564],
                    popup: "Laboratorio Fisica II"
                },
                {
                    position: [-15.98991, -48.0457],
                    popup: "Laboratorio Fisica I"
                },
                {
                    position: [-15.98979, -48.04591],
                    popup: "Sala dos Técnicos"
                },
                {
                    position: [-15.98972, -48.04587],
                    popup: "Laboratório de Eletrônica NEI 1"
                },
                {
                    position: [-15.98967, -48.04581],
                    popup: "Laboratório de Eletrônica NEI 2"
                },
                {
                    position: [-15.98958, -48.04572],
                    popup: "Laboratório de Software e Simulação"
                },
                {
                    position: [-15.98964, -48.0456],
                    popup: "Laboratório de Termofluidos"
                },
                //Marcadores para MESP
                {
                    position: [-15.98946, -48.04411],
                    popup: "Área de refeição"
                },
                {
                    position: [-15.98952, -48.04404],
                    popup: "Caixa RU"
                }
            ];

            markers.forEach(({ position, popup }) => {
                L.marker(position)
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
