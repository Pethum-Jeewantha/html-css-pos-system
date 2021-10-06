// const MOCK_API = '';

import { Customer } from "./dto/customer";
import $ from 'jquery';

const BASE_API = 'https://bc677221-4831-4411-b038-9e174414f8ff.mock.pstmn.io';
const CUSTOMER_SERVICE_API = `${BASE_API}/customers`;

let customers: Array<Customer> = [];
let totalCustomers = 0;
let selectedPage = 1;
const PAGE_SIZE = 6;
let pageCount = 1;

loadAllCustomers();

function loadAllCustomers():void{

    const http = new XMLHttpRequest();

    http.onreadystatechange = () =>{

        if(http.readyState == http.DONE){
            if(http.status !== 200){
                alert("Failed to fetch customers, try again...!");
                return;
            }

            totalCustomers = +http.getResponseHeader('X-Total-Count');
            
            
            customers = JSON.parse(http.responseText)
        

            $('#tbl-customers tbody tr').remove();

            customers.forEach((c)=>{
                
                const rowHtml = `<tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.address}</td>
                <td><i class="fas fa-trash"></i></td>
                </tr>
                `;

                $('#tbl-customers tbody').append(rowHtml);
        });

        initPagination();
        }
    }

    http.open('GET',CUSTOMER_SERVICE_API+`?page=${selectedPage}&size=${PAGE_SIZE}`,true);

    http.send();

}

function initPagination():void{
    
    pageCount =  Math.ceil(totalCustomers / PAGE_SIZE);
    console.log(PAGE_SIZE);
    
    let html = `<li class="page-item"><a class="page-link" href="#">Previous</a></li>`;

    for (let index = 0; index < pageCount; index++) {
        html +=`<li class="page-item"><a class="page-link" href="#">${index+1}</a></li>`;
    }

    html +=`<li class="page-item"><a class="page-link" href="#">Next</a></li>`;

    $('ul.pagination').html(html);

    $('.page-item:first-child').on('click', ()=> navigateToPage(selectedPage -1));
    $('.page-item:last-child').on('click', ()=> navigateToPage(selectedPage +1));

    $('.page-item:not(.page-item:first-child, .page-item:last-child)').on('click', function (){
        navigateToPage(+$(this).text());
    });
}

function navigateToPage(page: number):void{
    if(page < 1 || page > pageCount) throw 'Invalid page number';

    selectedPage = page;
    loadAllCustomers();
}
