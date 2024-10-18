const Node = require('../models/astModel');
const { parseRule, evaluateAST } = require('../utils/astHelper');

const createRule = (req, res) => {
    const { ruleString } = req.body;
    try {
        const rootNode = parseRule(ruleString);
        res.json({ ast: rootNode });
    } catch (error) {
        res.status(400).json({ error: 'Invalid rule syntax.' });
    }
};

const evaluateRule = (req, res) => {
    const { ast, userData } = req.body;
    try {
        const result = evaluateAST(ast, userData);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Error evaluating rule.' });
    }
};

module.exports = { createRule, evaluateRule };
