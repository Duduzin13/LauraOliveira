import React from 'react';

const LetterPage: React.FC = () => {
  return (
    <div className="relative min-h-full flex flex-col items-center">
      <div className="letter-container font-script overflow-y-auto max-h-[50vh] px-6 py-8 mx-4 rounded-lg shadow-md space-y-4 bg-white/95">
        <h2 className="text-2xl text-rose-600 mb-6 text-center">Carta de Amor</h2>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>Xuxu… futura Oliveira…</p>
          
          <p>Eiii, eu tô morrendo de saudades, amor. Amor, eu estou deixando uma aula de interpretação rodando enquanto penso e escrevo isso, acho que eu consigo absorver a aula e te escrever também, né?!</p>
          
          <p>Enfim, meu bem, às vezes eu paro e penso em nós, sabe? Nem tanto no passado, um pouco no presente e um bocado no futuro, e cara, isso é uma loucura, né? Namorar uma goiana que agora mora em Minas, que eu amo muito e quero muito passar o resto da minha vida, construir uma família, filhos… (ou filho, ou nenhum, ou adotar).</p>
          
          <p>Sei que quero muito aproveitar muitos nossos momentos, mesmo que a distância, quero continuar te amando cada dia mais, pois, de verdade, é impossível alguém que fique perto de você e que não queria ser seu amigo, compartilhar dessa energia maravilhosa que você exala.</p>
          
          <p>Eu sou muito feliz de estar com você, de passar esse dia com você (mesmo que eu não considere ele um dia tão importante assim, até porque todos os dias é o nosso dia, então…), de poder te ter, confiar, de poder receber tamanha confiança de uma pessoa que não costuma confiar nem a si mesma.</p>
          
          <p>E tá aí uma coisa que… puta que pariu, amor, você é foda, você é pika, e não tem nada nesse mundo que consiga me provar o contrário. Então, se eu pudesse te fazer se enxergar como eu enxergo, você veria, porém, como não é possível, você pode apenas acreditar e começar a se valorizar mais.</p>
          
          <p>Eu te amo, meu amor, e quero sempre que você esteja bem consigo mesma.</p>
          
          <p>Falando um pouco sobre nós atualmente, tá sendo muito complicado tudo isso. Eu já esperava algo assim, mas está bem difícil mesmo ver você aí toda engenheira, estudando, seguindo sua vida, sendo feliz longe de mim, e eu não podendo passar por momentos importantes da sua vida com você é torturante.</p>
          
          <p>E, amor, eu não sei o dia de amanhã, eu posso cair duro aqui e isso acabar, mas enquanto isso não acontece, eu vou continuar te amando e pretendo em um futuro não tão distante te fazer uma promessa… (ou é juramento… não sei, até porque eu nunca casei e não presto muito atenção nos votos).</p>
          
          <p>Mas eu quero aproveitar tudo que estamos vivendo, e se podemos passar nem que seja um final de semana juntos, pra mim já está bom; que seja um ano a distância, pra mim tá bom.</p>
          
          <p>O que eu quero mesmo é estar com você agora e em um futuro desconhecido. E quero que saiba que a cada dia que passa mesmo longe só me faz ter mais certeza de que meu lugar é ao seu lado.</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-rose-500 text-4xl rotate-12">❤</div>
      </div>
    </div>
  );
};

export default LetterPage;