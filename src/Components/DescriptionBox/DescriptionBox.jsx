import style from './Description.module.css';

export const DescriptionBox = () => {
  return (
    <div className={style.descriptionBox}>
        <div className={style.descriptionBoxNavigator}>
            <div className={style.descriptionBoxNavBox}>Descrição</div>
            <div className={style.descriptionBoxNavBoxFade}>Avaliações (122)</div>
        </div>
        <div className={style.description}>
            <p>
                Um site de comércio eletrônico é uma plataforma online que facilita a compra 
                e venda de produtos ou serviços pela internet. Serve como um mercado virtual 
                onde empresas e os indivíduos podem exibir seus produtos, interagir com os 
                clientes e realizar transações sem a necessidade de presença física. 
                Os sites de comércio eletrônico ganharam imensa popularidade devido à sua conveniência, 
                acessibilidade e alcance global que oferecem.               
            </p>
            <p>
                Os sites de comércio eletrônico normalmente exibem produtos ou serviços 
                junto com descrições detalhadas, imagens, preços e quaisquer variações disponíveis 
                (por exemplo, tamanhos, cores). Cada produto geralmente tem sua própria página 
                dedicada com informações relevantes
            </p>
        </div>
    </div>
  )
}
