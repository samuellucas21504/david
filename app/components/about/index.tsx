"use client"

import "./styles.scss";
import Image from "next/image";
import { prefix } from "../../utils/prefix";

export default function About() {
    
    return <div className="about">
        <h1>Sobre</h1>
        <div className="grid md:grid-cols-2 grid-cols-0">
            <Image src={`${prefix}/david.webp`} width={720} height={1080} alt="David image" />
            <section className="mt-12 md:mt-8 md:ml-8 ml-2 mr-2">
                <p>
                    David ou Davi é uma das esculturas mais famosas do artista renascentista Michelangelo. O trabalho retrata o herói bíblico com realismo anatômico impressionante, sendo considerada uma das mais importantes obras do Renascimento. A escultura encontra-se em Florença, Itália, cidade que originalmente encomendou a obra.
                </p>
                <p>
                    A escultura possui 5,17 metros de altura e representa o herói bíblico David, um dos personagens mais frequentes na arte florentina. Originalmente encomendada como parte de uma série de outras estátuas de profetas e heróis bíblicos, David estava cotado para decorar uma das fachadas de Santa Maria del Fiore. No entanto, após sua conclusão, a escultura foi posicionada em frente ao Palazzo della Signoria, sede da governadoria de Florença, onde foi revelada ao público oficialmente em 8 de setembro de 1504.
                </p>
                <p>
                    Por conta da natureza heroica representada, a estátua simbolizou o sentimento de liberdades civis que dominava a República de Florença. Os olhos de David, com semblante sério e cauteloso, estavam posicionados em direção a Roma. Em 1873, a escultura foi transferida para o interior da Galeria da Academia de Belas Artes enquanto a praça pública recebeu uma réplica em seu lugar.
                </p>
            </section>
        </div>
    </div>
}