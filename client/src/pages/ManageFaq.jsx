import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import styles from "../styles/ProfileStyles";
import { Check, Close } from "@mui/icons-material";
import { styles1 } from "../styles/DashBoardStyles";

const initialFaqCategories = [
  "Account & Registration",
  "Ordering",
  "Delivery",
  "Payments",
  "Returns & Refunds",
  "Account Issues",
  "Restaurant & Food Queries",
  "Technical Support",
  "Promotions & Discounts",
  "General Inquiries",
];

const initialQuestions = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Why is Lorem Ipsum used?",
    answer: "It provides a more readable text for layout designs.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
];

const ManageFaq = () => {
  const [faqCategories, setFaqCategories] = useState(initialFaqCategories);
  const [selectedCategory, setSelectedCategory] = useState(faqCategories[0]);
  const [questions, setQuestions] = useState(initialQuestions);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setFaqCategories([...faqCategories, newCategory]);
      setNewCategory("");
      setIsAddingCategory(false);
    }
  };
  const handleAddQuestion = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setQuestions([
        ...questions,
        { question: newQuestion, answer: newAnswer },
      ]);
      setNewQuestion("");
      setNewAnswer("");
    }
    setIsAddingQuestion(false);
  };
  return (
    <Box display="flex" gap={2} marginTop={10}>
      {/* Left Sidebar (FAQ Categories) */}
      <Box width="40%" bgcolor="#fff" p={2} sx={styles1.ScrollBar5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold" sx={styles.headerText}>
            FAQ
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => setIsAddingCategory(true)}
          >
            + Add
          </Button>
        </Box>
        <List>
          {faqCategories.map((category, index) => (
            <ListItemButton
              key={index}
              selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                borderRadius: 3,
                border: "1px solid #E3E3E3",
                mb: 1,
                "&.Mui-selected": { backgroundColor: "#ff9800", color: "#fff" },
              }}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}

          {isAddingCategory && (
            <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                autoFocus
                size="small"
                variant="outlined"
                placeholder="Enter category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddCategory();
                  if (e.key === "Escape") setIsAdding(false);
                }}
              />
              <IconButton onClick={handleAddCategory} color="success">
                <Check />
              </IconButton>
              <IconButton onClick={() => setIsAdding(false)} color="error">
                <Close />
              </IconButton>
            </Box>
          )}
        </List>
      </Box>

      {/* Right Section (Questions & Answers) */}
      <Box
        flexGrow={1}
        bgcolor="#fff"
        p={2}
        borderRadius={3}
        border={"1px solid #E3E3E3"}
        sx={styles1.ScrollBar5}
      >
        {questions.map((faq, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Question
            </Typography>
            <TextField
              fullWidth
              value={faq.question}
              size="small"
              sx={{ my: 1, border: "1px solid #E3E3E3" }}
              disabled
            />
            <Typography variant="subtitle1" fontWeight="bold">
              Answer
            </Typography>
            <TextField
              fullWidth
              value={faq.answer}
              variant="outlined"
              size="small"
              sx={{ my: 1 }}
              disabled
            />
          </Paper>
        ))}
        {isAddingQuestion && (
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Question
            </Typography>
            <TextField
              fullWidth
              autoFocus
              size="small"
              variant="outlined"
              placeholder="Enter question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddQuestion();
                if (e.key === "Escape") setIsAddingQuestion(false);
              }}
              sx={{ my: 1 }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              Answer
            </Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Enter answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddQuestion();
                if (e.key === "Escape") setIsAddingQuestion(false);
              }}
              sx={{ my: 1 }}
            />
            <Box display="flex" justifyContent="flex-end" gap={1} mt={1}>
              <IconButton onClick={handleAddQuestion} color="success">
                <Check />
              </IconButton>
              <IconButton
                onClick={() => setIsAddingQuestion(false)}
                color="error"
              >
                <Close />
              </IconButton>
            </Box>
          </Paper>
        )}

        {/* Add Button at Bottom */}
        <Button
          fullWidth
          variant="contained"
          color="warning"
          onClick={() => setIsAddingQuestion(true)}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ManageFaq;
