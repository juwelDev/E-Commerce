const Breadcrumb = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col space-x-2 flex items-center">
              <div>
                <a href="index.html">
                  <i className="fa-solid fa-house text-accentOne" />
                </a>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-paragraph" />
              </div>
              <div>
                <a href="shop.html">Shop</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
