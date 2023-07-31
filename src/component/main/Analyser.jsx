import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Analyser = () => {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState({
    wordCount: 0,
    characterCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    pronounCount: 0,
    readingTime: "",
    longestWord: "",
  });
  function countTextStats(text) {
    // Count words
    const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

    // Count characters
    const characterCount = text.length;

    // Count sentences
    const sentenceCount = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence !== "").length;

    // Count paragraphs
    const paragraphCount = text
      .split(/\n\s*\n/)
      .filter((paragraph) => paragraph !== "").length;

    // Count pronouns (you can add more pronouns as needed)
    // const pronouns = ["I", "you", "he", "she", "it", "we", "they"];
    const pronounCount =
      text.match(/\b(?:I|you|he|she|it|we|they)\b/gi)?.length || 0;
    // Assuming an average reading speed of 225 words per minute
    const averageReadingSpeed = 225;
    // Calculate reading time (in minutes)
    const readingTime = Math.ceil(wordCount / averageReadingSpeed);

    //find the longest word
    const wordsArray = text.split(" ");
    let longestWord = "";
    wordsArray.forEach((ele) => {
      if (ele.length > longestWord.length) {
        longestWord = ele;
      }
    });
    setStats({
      wordCount,
      characterCount,
      sentenceCount,
      paragraphCount,
      pronounCount,
      readingTime,
      longestWord,
    });
  }
  const {
    wordCount,
    characterCount,
    sentenceCount,
    paragraphCount,
    pronounCount,
    readingTime,
    longestWord,
  } = stats;
  return (
    <Container style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
      <Card>
        <Card.Body className="container__text--information">
          <Container className="text-center">
            <Row>
              <Col className="words__count">
                <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>Words</h5>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  {wordCount}
                </h5>
              </Col>
              <Col>
                <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                  Characters
                </h5>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  {characterCount}
                </h5>
              </Col>
              <Col>
                <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                  Sentences
                </h5>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  {sentenceCount}
                </h5>
              </Col>
              <Col>
                <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                  Paragraphs
                </h5>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  {paragraphCount}
                </h5>
              </Col>
              <Col>
                <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                  Pronouns
                </h5>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  {pronounCount}
                </h5>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="mt-4 container__text">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here...."
          style={{ height: "400px" }}
          onChange={(e) => {
            setInput(e.target.value);
            countTextStats(e.target.value);
          }}
          value={input}
        />
      </Card>
      <Card className="mt-4 text-center">
        <Card.Body>
          <Row>
            <Col className="container__reading--time">
              <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                Average Reading Time: - &nbsp;
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {readingTime !== "" ? `~${readingTime} minute` : ""}
                </span>
              </h5>
            </Col>
            <Col className="container__longest--word">
              <h5 style={{ color: "#9e9e9e", fontWeight: "bold" }}>
                Longest word: - &nbsp;
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {longestWord}
                </span>
              </h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
