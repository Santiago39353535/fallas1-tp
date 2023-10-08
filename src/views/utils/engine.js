/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable default-case */

export class Engine {
    constructor() {
        this.rules = [];
        this.tree = null;
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    run(facts) {
        if (!this.tree) {
            this.tree = this.createTree(this.rules);
        }

        let numFacts = 0;
        for (const [fact, value] of Object.entries(facts)) {
            if (value != "") {
                numFacts += 1;
            }
        }
        
        function compareFacts(nodes) {
            const n = nodes.find(node => meetsFacts(node.rule, facts));
            if (!n) {
                return [];
            }
            if (!n.rule || countFacts(n.rule) != numFacts) {
                return compareFacts(n.children);
            } else {
                return [n.rule.event];
            }
        }

        return { events: compareFacts(this.tree) };
    }

    createTree(rules) {
        return createNode(rules, 1);
    }
}

function meetsFacts(rule, facts) {
    if (rule === null) {
        return true;
    }
    const conditions = [];
    for (const [fact, value] of Object.entries(facts)) {
        if (value != "") {
            conditions.push({
                fact: fact,
                operator: "equal",
                value: value,
            });
        }
    }
    const factRule = {
        conditions: {
            all: conditions,
        }
    }
    return meetsConditions(factRule, rule.conditions.all);
}

function meetsCondition(rule, condition) {
    switch (condition.operator) {
        case "equal":
            const found = rule.conditions.all.find(
                cond => cond.fact == condition.fact && cond.value == condition.value
            );
            return found !== undefined;
    }
}

function meetsConditions(rule, conditions) {
    return conditions.every(condition => meetsCondition(rule, condition));
}

function countFacts(rule) {
    return rule.conditions.all.length;
}

function findRulesWithNFacts(rules, numFacts) {
    return rules.filter(rule => countFacts(rule) == numFacts);
}

function createNode(rules, depth) {
    if (rules.length == 0) {
        // leaf node
        return [];
    }

    // rules that apply to this tree level
    const nodeRules = findRulesWithNFacts(rules, depth);
    if (nodeRules.length == 0) {
        return createNode(rules, depth + 1);
    }

    const childNodes = nodeRules.map(nodeRule => {
        const subRules = rules.filter(rule => 
            meetsConditions(rule, nodeRule.conditions.all) && countFacts(rule) > depth
        );
        return {
            rule: nodeRule,
            children: createNode(subRules, depth + 1),
        };
    });

    return childNodes;
}
