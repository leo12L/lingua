import Banner from "../organis/Banner";
import Section from "../organis/Section";

export default function FirstPage(){
    return(<>
    <Banner/>
    <Section title={"¿Como funciona?"} fonTitle={"font-roboto"}
        text={ "te haremos unas cuantas preguntas, estas no ayudaran a conocerte un poco mas " +
        "esto con la finalidad de enseñarte los idiomas con elementos que te sean familiares "}/>
    
    </>)
}