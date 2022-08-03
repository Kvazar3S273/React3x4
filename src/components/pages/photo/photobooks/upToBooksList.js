import { HashLink } from "react-router-hash-link";

export function UpToBooksList() {
    return (
      <>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <HashLink smooth to={"#bookslist"}>
            <button
              type="submit"
              className="btn btn-success btn-lg mt-4 mb-4 p-3"
              id="show_calc"
              style={{ width: "100%", background: "#006167" }}
            >
              ▲     До списку всіх фотокниг     ▲
            </button>
          </HashLink>
        </div>
        <div className="col-md-2"></div>
      </div>
      </>
    );
}