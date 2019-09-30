const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("./app");

describe("--------------- Enter the tests ----------------", () => {
    it ("should GET /", (done) => {
        chai.request(server)
            .get("/")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);

                    // Meta tests
                    res.body.meta.status.should.be.a("boolean");    // True, in this case
                    res.body.meta.message.should.be.a("string");    // "Docker rocksss!!!" in this case
                    res.body.meta.code.should.be.a("number");       // 200 in this case


                    done();
                }
            });
    });
});