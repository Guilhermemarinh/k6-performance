// inicialização
import sleep from 'k6';

// config
export const options = {
    vus: 1,
    duration: '10s'
}

// Execução // Código VU
export default function() {
    console.log("test k6");
    sleep(1);
}

// Desmontagem

export function teardown(data){
    console.log(data)
}