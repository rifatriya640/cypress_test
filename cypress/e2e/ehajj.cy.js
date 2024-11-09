import 'cypress-file-upload';

describe('template spec', () => {
    it('passes', () => {


      cy.visit('https://uat-ehaj.oss.net.bd/login') 


      cy.contains('a.nav-link', 'লগইন').click();
      cy.contains('span.kc-social-provider-name', 'হজযাত্রী/ গাইড লগইন').click();


      cy.get("input[id='mobile_no']").type("01737523229");
      cy.get("input[id='password']").type("#@Riya.12");
      cy.get("button[id='next_btn']").click();


      cy.url().should('include', '/my-desk');
      cy.get("div[class='dash-menu-item']").contains('প্রাক নিবন্ধন').click();
      cy.contains("a", "আবেদন")
        .should("have.attr", "href", "https://uat-ehaj.oss.net.bd/pilgrim/pre-registration/index#/pilgrims-list")
        .click();
            cy.contains("a[href='#/pilgrim-create']", "নতুন হজযাত্রী যুক্ত করুন")
        .click();
            cy.get('input[name="resident"][value="Bangladeshi"]').check();
            cy.get('input[name="gender"][value="female"]').check();
            cy.get('input[placeholder="dd-mm-yyyy"]').click()

    cy.get('div[aria-label="Open years overlay"]').click();
    cy.get('div.dp__overlay_cell.dp__overlay_cell_pad').contains('1976').click();
    cy.get('div[aria-label="Open months overlay"]').click();
    cy.get('div.dp__overlay_cell.dp__overlay_cell_pad').contains('Oct').click();
    cy.get('div.dp__cell_inner.dp__pointer')
        .contains('15')
        .should('be.visible')
        .click();

      cy.get('input[name="identity"][value="NID"]').check();
      cy.get('input[placeholder="NID number"]').click().type('3748509308'); 
      cy.contains('button', 'পরবর্তী').click();


      cy.get('input[placeholder="Name in Bangla"]').click().type('রিফাত আমিন রিয়া'); 
      cy.get('input[placeholder="Name in English"]').click().type('Rifat Amin Riya'); 
      cy.get('input[placeholder="Father Name in Bangla"]').click().type('রুহুল আমিন'); 
      cy.get('input[placeholder="Mother Name in Bangla "]').click().type('সেমি আমিন');

    cy.get('span.select2-selection__rendered')
        .click();

    cy.get('input.select2-search__field')
        .type('re');

    cy.contains('li.select2-results__option', 'PRESIDENT')
    .should('be.visible')
    .click();

      cy.get('input[placeholder="Mobile number"]').click().type('01737523229');
      cy.get('select.form-control.input-sm').select('Married');
      cy.get('input[placeholder="Spouse Name"]').click().type('Hubby');
      cy.contains('button', 'পরবর্তী').click();

    cy.get('input[placeholder="Post Code"]').eq(0).type('4534');

    cy.get('span.select2-selection__rendered').first().click();
    cy.get('input.select2-search__field').type('RAJSHAHI');
    cy.get('ul.select2-results__options>li').click();


    cy.get('span.select2-selection__rendered').eq(2).click();
    cy.get('input.select2-search__field').type('RAJSHAHI');
    cy.get('ul.select2-results__options>li').click();


    cy.get('span.select2-selection__rendered').eq(1).click();
    cy.get('input.select2-search__field').type('PABA');
    cy.get('ul.select2-results__options>li').click();

    cy.get('span.select2-selection__rendered').eq(3).click();
    cy.get('input.select2-search__field').type('PABA');
    cy.get('ul.select2-results__options>li').click();

    cy.get('input.form-control[placeholder="Address"]').first().type("Nowhata");
    cy.get('input.form-control[placeholder="Address"]').eq(1).type("Nowhata");

    cy.get('input[placeholder="Post Code"]').eq(1).type('4534');

    cy.contains('button', 'পরবর্তী').click();

    cy.get('span.select2-selection__rendered').eq(0).click();
    cy.get('input.select2-search__field').type('Sonali Bank PLC');
    cy.get('ul.select2-results__options>li').click();

    cy.get('span.select2-selection__rendered').eq(1).click();
    cy.get('input.select2-search__field').type('RAJSHAHI');
    cy.get('ul.select2-results__options>li').click();

    cy.get('select.form-control.input-sm').select('Pilgrim own');

    cy.get('span.select2-selection__rendered').eq(2).click();
    cy.get('input.select2-search__field').type('BAGHA (Routing Number: 200810108 )');
    cy.get('ul.select2-results__options>li').click();

    cy.get('input.form-control[placeholder=\'Account Number\']').type('1234567891234');

          
    cy.get('input[id=\'pilgrim_img\']').attachFile("pilgrim.jpg");

    cy.get('button[id=\'cropImageBtn\']', 
        { timeout: 10000 })
    .should('be.visible')  
    .click();    
    cy.contains('button', 'পরবর্তী').click();
    cy.contains('button', 'সাবমিট').click();
    
    })
  })