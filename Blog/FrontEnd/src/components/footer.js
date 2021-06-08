import React from 'react';
import {Link} from 'react-router-dom';



const Footer = () => {
    return(

        <div>
            {/* <!-- Footer --> */}
<footer class="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    {/* <!-- Left --> */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </Link>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </Link>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </Link>
      <Link href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </Link>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link href="#!" class="text-reset">Angular</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">React</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Vue</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Laravel</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" class="text-reset">Pricing</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Settings</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Orders</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Help</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  <div class="text-center p-4" >
   
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
        </div>

    )
}



export default Footer;

