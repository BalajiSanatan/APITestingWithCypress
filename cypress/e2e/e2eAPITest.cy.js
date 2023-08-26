///<reference types="Cypress"/>
describe('API Testing',()=>{

    it('CRUD API',()=>{

        cy.getAPI(4).then((response)=>{
            cy.log(JSON.stringify(response))
            let userId=response.body.data.id
            cy.log("****userid***"   +  userId)
            expect(response.status).to.be.equal(200)
            expect(response.body.data.id).to.be.equal(4)
            
            

            
        })
        
    })
})