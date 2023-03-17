import http from 'k6/http';
import {check, sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options={
    vus: 100,
    duration: '10s',
    thresholds:{
        http_req_failed:['rate < 0.01'], // porcentagem de erro abaixo de 1%
        http_req_duration:['p(95) < 250']//95% dos testes devem ficar abaixo de 250ms de tempo de resposta
    }

}

const BASE_URL = 'https://test-api.k6.io'; 
export function setup(){
    const loginRes = http.post(`${BASE_URL}/auth/token/login/`,
    {
        username:'0.7317884934931715@mail.com',
        password:'user123'

    });
    const token = loginRes.json('acess');
    return token;

}

export default function(token){

    const params = {
        headers: {
            Autorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = http.get(`${BASE_URL}/my/crocodiles`, params);

    check(res, {
        'status code 200': (r) => r.status === 200
    });
}

export function handleSummary(data) { //exportando relatorio 
    return {
      "../reports/teste_k6.html": htmlReport(data),
    };
  }