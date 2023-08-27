///<reference types="Cypress"/>
describe('API Testing',()=>{
    it('CRUD API',()=>{
        cy.fixture('postPayload.json').then((payload)=>{
            let postpayload=payload
        
        let putpayload ={ "name": "Balaji"}

            cy.postAPI(postpayload).then((responce)=>{
            let userID=responce.body.id
           
            expect(responce.status).to.be.eq(201)
            cy.getAPI(userID).then((responce)=>{
                expect(responce.status).to.be.eq(200)

            })
          cy.putAPI(userID,putpayload).then((responce)=>{
                expect(responce.status).to.be.eq(200)
                expect(responce.body).has.property('name','Balaji')
               

            })
            cy.getAPI(userID).then((responce)=>{
                cy.log(JSON.stringify(responce))
                expect(responce.status).to.be.eq(200)
                expect(responce.body).has.property('name','Balaji')

            })
           
           cy.deleteAPI(userID).then((responce)=>{
                expect(responce.status).to.be.eq(204)

            })
           
           
          })
            
    })
})
        
})

