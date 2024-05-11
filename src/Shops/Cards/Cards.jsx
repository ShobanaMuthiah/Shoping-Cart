import React from 'react';

const Cards = ({cards,cartInc,cartDec}) => {
    return (
        <>
        <section>
        <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    { cards.map((ele,index)=>
                    
                    {
                        return(
                            <div key={ele.id} className="col mb-5">
                            <div className="card h-100">
                            {(ele.sale)?
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                            :''}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>

                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">{ele.prod}</h5>
                                  {(ele.star)?
                                   <div className="d-flex justify-content-center small text-warning mb-2">
                                   <span className="bi-star-fill"></span>
                                   <span className="bi-star-fill"></span>
                                   <span className="bi-star-fill"></span>
                                   <span className="bi-star-fill"></span>
                                   <span className="bi-star-fill"></span>

                                   
                               </div>
                                  :
                                  ''}
                                   {(ele.del)?
                                   <span className="text-muted text-decoration-line-through">$20.00</span>
                                   :''
                                   }
                                    
                                    {ele.pri}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {(ele.sts)?
                                <div className="text-center"><a onClick={()=>{cartInc(ele.id)}} className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
:
<div className="text-center"><a onClick={()=>cartDec(ele.id)} className="btn btn-outline-dark mt-auto" href="#">Remove From cart</a></div>

                                }
                            </div>
                        </div>
                    </div>
                        )
                        
                    })

                    }
                        
                </div>
            </div>
        </section>
        </>
    );
};

export default Cards;