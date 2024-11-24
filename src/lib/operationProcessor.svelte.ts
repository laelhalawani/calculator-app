import { Parser } from 'expr-eval';

function processOperation(expression: string): number {
    const parser = new Parser();
    try {
        const result = parser.evaluate(expression);
        return result;
    } catch (error) {
        console.error('Error evaluating expression:', error);
        throw new Error('Invalid expression');
    }
}

export default processOperation