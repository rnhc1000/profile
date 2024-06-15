import './styles.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";

import Zoom from 'react-reveal/Zoom';

import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'




export default function Welcome() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section id="welcome-section">
      <div className="welcome-container">
        <Zoom>
          <pre>
            <code className="language-javascript">
              {`
      package br.dev.ferreiras.threads;

      public class GreetingsThread {
        static class Greetings implements Runnable{
          public void start() {
            Thread t = new Thread(this,"threadName");
            t.start();
          }
          @Override
          public void run() {
            System.out.print("Hello, ");
            try {
              Thread.sleep(1000);
              System.out.print("Everybody!");
            } catch (InterruptedException e) {
              throw new RuntimeException();
            }
          }
        } 
`}
            </code>
          </pre>
        </Zoom>
        <Zoom>
          <ReactTyped style={{ color: 'white' }} className="welcome-important" startWhenVisible strings={["Hello, Everybody!"]} typeSpeed={100} backSpeed={50} />
          <br></br>

          <blockquote className="welcome-quote">
          I am called <span>Ricardo Ferreira</span> and as a <Link rel="dns-prefetch" to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Sr Software Engineer</Link>, I love designing and writing clean code and deploying web-based business applications. 
          I have been very successful as an architect and lead developer of solutions and applications that have fully met the requirements and needs of 
          companies and customers, especially in the digital payments industry.
          <br /><br />

          I have developed and delivered applications that have helped thousands of retail stores increase their profitability, productivity and efficiency 
          in receiving payments, using modern languages and frameworks, cloud computing, security and compliance to keep up with the demanding requirements of the digital payments industry.
           <br /><br /> 
           
           For a comprehensive description of my journey and roadmap up to today,take a look at my history, 
           clicking on the links below to find out more about my career.

          </blockquote>
          <br></br>
        </Zoom>

 
      </div>
    </section>
  );
}