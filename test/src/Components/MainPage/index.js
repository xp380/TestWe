import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/index";
import { Layout, Row } from "antd";
import BookCard from "../../Container/BookCard";
import FavoriteBook from "../../Container/FavoriteBook";
import "./MainPage.css";

const { Content, Footer } = Layout;
const MainPage = (props) => {
  const { all_books, apiBooks, favorite_books } = props;

  console.log("demo", all_books);
  console.log("pkp", favorite_books);
  useEffect(() => {
    apiBooks();
  }, []);

  return (
    <Router>
      <Header />
      <Content className="content">
        <Switch>
          <Route exact path="/">
            <Row gutter={15}>
              {all_books.map((data) => (
                <BookCard bookData={data} />
              ))}
            </Row>
          </Route>
          <Route path="/myList">
            <Row gutter={15}>
              {favorite_books.map((data) => (
                <FavoriteBook data={data} />
              ))}
            </Row>
          </Route>
        </Switch>
      </Content>
      <Footer className="foot"></Footer>
    </Router>
  );
};

export default MainPage;
