Tipos de Testes:
Smoke Testing:
1 - Carga Mínima
2 - Cenário Simples
3 - Funcionalidade Core
4 - Rápido Resultado

Load Testing:
1 - Quantidade de Tráfego
2 - Condições normais e de Pico
3 - Garantir funcionamento

Stress Testing:
1 - Como seu sistema se comporta em condições extremas ?
2 - Qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferência ?
3 - O ponto de ruptura do seu sistema ?
4 - O sistema se recupera sem intervenção manual após o término do teste de estresse ?
- Validar arquitetura de uma aplicação

outros pontos:
1 - A rapidez com que os mecanismos de dimensionamento automático reagem ao aumento da carga.
2 - Se Houver alguma falha durante os eventos de dimensionamento.
 
Spike Testing:
1 - Como seu sistema funcionár sob um aumento repentino de Tráfego ?
2 - O seu sistema irá se recuperar assim que o tráfego diminuir ?
3 - 

SOAK/Endurance Testing (teste de imersão):
- Confiabilidade em longos períodso de tempo
1 - O sistema não sofre com bugs ou vazamentos de memória.
2 - Verifica se as reinicializações inesperadas do aplicativo não perdem solicitações.
3 - Encontre bugs relacionados a condições de corrida que aparecem esporadicamente
4 - Certificar que seu BD não esgote o espaço de armazenamento alocado e pare.
5 - Certifique-se de que seus logs não esgotam o armazenamento em disco alocado.
6 - Certifique-se de que os serviços externos dos quais você depende não parem de funcionar após a execução de uma certa quantidade de solicitações.

Pontos importantes:
1 - Quantidade de usuários (não precisa chegar a ruptura- utilizar cerca de 80% do máximo suportado de users)
2 - Requisitos de infraestrutura



Entendendo métricas

1. Contadores
2. Medidores
3. Taxas
4. Tendência

Mão na massa: (aula 8)
    Realizar o registro de um novo usuário
Critérios:
    Performance Test
    - Carga 10 VU por 10s
Limites:
    - Requisição com falha inferior a 1%
    - Duração da requisição p(95) < 500
    - Requisição com sucesso superior a 95%
