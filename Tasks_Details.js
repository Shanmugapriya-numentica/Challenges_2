
const people = [
    { id: "p1", name: "Arun", email: "arun@example.com", capacityHrsPerDay: 6 },
    { id: "p2", name: "Uma", email: "uma@", capacityHrsPerDay: 5 }, // invalid email
    { id: "p3", name: "Aadhir", email: "aadhir@example.com", capacityHrsPerDay: 4 },
    { id: "p4", name: "Aarik", email: "aarik@example.com", capacityHrsPerDay: 0 }, // edge: zero capacity
];

const todos = [
    // id, title, estimateHrs, priority, status, due(YYYY-MM-DD), assigneeId?, dependsOn?
    { id: "t1", title: "Setup repo", estimateHrs: 2, priority: "high", status: "done", due: "2025-09-16", assigneeId: "p1" },
    { id: "t2", title: "Scaffold UI", estimateHrs: 5, priority: "high", status: "in-progress", due: "2025-09-18", assigneeId: "p1", dependsOn: ["t1"] },
    { id: "t3", title: "Build login", estimateHrs: 8, priority: "medium", status: "todo", due: "2025-09-20", assigneeId: "p2" },
    { id: "t4", title: "Payments integration", estimateHrs: 13, priority: "high", status: "todo", due: "2025-09-19", assigneeId: "p2", dependsOn: ["t3"] },
    { id: "t5", title: "Notifications", estimateHrs: 3, priority: "low", status: "todo", due: "2025-09-25", assigneeId: null }, // unassigned
    { id: "t6", title: "Profile screen", estimateHrs: 5, priority: "medium", status: "in-progress", due: "2025-09-21", assigneeId: "p3" },
    { id: "t7", title: "Accessibility pass", estimateHrs: 2, priority: "medium", status: "todo", due: "2025-09-15", assigneeId: "p3" }, // overdue (today is 2025-09-15 IST)
    { id: "t8", title: "Error monitoring", estimateHrs: 4, priority: "low", status: "todo", due: "2025-09-23", assigneeId: "p4" }, // zero-capacity assignee
    { id: "t9", title: "Build login", estimateHrs: 8, priority: "medium", status: "todo", due: "2025-09-20", assigneeId: "p2" }, // duplicate title
    { id: "t10", title: "Refactor utils", estimateHrs: 3, priority: "low", status: "done", due: "2025-09-14", assigneeId: "p1" }, // done but due in past
    { id: "t11", title: "Release v1", estimateHrs: 6, priority: "high", status: "blocked", due: "2025-09-22", assigneeId: "p2", dependsOn: ["t4", "t6"] },
    { id: "t12", title: "Data migration", estimateHrs: 7, priority: "high", status: "todo", due: "2025-09-28", assigneeId: "p3", dependsOn: ["t4", "t99"] }, // missing dep t99
    { id: "t13", title: "Cycle check A", estimateHrs: 1, priority: "low", status: "todo", due: "2025-09-30", assigneeId: "p3", dependsOn: ["t14"] },
    { id: "t14", title: "Cycle check B", estimateHrs: 1, priority: "low", status: "todo", due: "2025-09-30", assigneeId: "p3", dependsOn: ["t13"] },
];


class TodosDetails {
    constructor(people, todos) {
        this.people = people;
        this.todos = todos;
    }

    //10
    detectDependency() {
        let dependentList = [];
        let dependentList2 = [];
        let result = [];

        for (const task of this.todos) {

            if (task.hasOwnProperty('dependsOn')) {
                dependentList.push(task.dependsOn);
            }
        }

        for (let i = 0; i < dependentList.length; i++) {
            let first = dependentList[i];
            for (let j = 0; j < first.length; j++) {
                let valToCheck = first[j];

                for (const task of this.todos) {
                    if (task.id === valToCheck && task.hasOwnProperty('dependsOn')) {
                        dependentList2.push(task.dependsOn)
                    }
                }
            }

            for (let i = 0; i < dependentList2.length; i++) {
                let first = dependentList2[i];
                for (let j = 0; j < first.length; j++) {
                    let valToCheck = first[j];

                    for (const task of this.todos) {
                        if (task.id === valToCheck && task.hasOwnProperty('dependsOn')) {
                            result.push(task.id)
                        }
                    }
                }
            }

        } return result;
    }

    //1
    findTasksPriority() {

        let count = 0;
        for (let i = 0; i < this.todos.length; i++) {

            const currentData = this.todos[i];
            if ((currentData.priority.toLowerCase() !== 'low' &&
                currentData.status.toLowerCase() !== 'done')) {
                count += 1;
            }
        }
        return count;
    }

    //2
    printEmail() {
        let count = 0;
        let result = [];

        for (let i = 0; i < this.people.length; i++) {
            let currentData = this.people[i];
            let mail = currentData.email;
            let sentence = '';

            if ((!mail.includes(".com") || !mail.includes("@"))) {
                count += 1;
                sentence = currentData.name + " <" + mail + "> " + "( INVALID EMAIL! )";
                result.push(sentence);
            }
            else {
                sentence = currentData.name + " <" + mail + ">";
                result.push(sentence);
            }
        } return result;
    }


    //3
    getTotalEstimatedHours() {
        const result = [];

        for (let i = 0; i < this.todos.length; i++) {
            const task = this.todos[i];

            if (task.status.toLowerCase() === 'done') {
                continue;
            }

            let personName = "Unassigned";
            for (let j = 0; j < this.people.length; j++) {
                if (this.people[j].id === task.assigneeId) {
                    personName = this.people[j].name;
                    break;
                }
            }

            let exist = false;
            for (let k = 0; k < result.length; k++) {
                if (result[k].person === personName) {
                    result[k].hrs += task.estimateHrs;
                    exist = true;
                    break;
                }
            }

            if (!exist) {
                result.push({
                    person: personName,
                    hrs: task.estimateHrs
                });
            }
        }

        return result;
    }

    //4
    findDueEndedTasks() {

        const today = new Date("2025-09-15T23:59:59");

        const result = [];
        for (let i = 0; i < this.todos.length; i++) {

            const task = this.todos[i];
            if (task.status.toLowerCase() === 'done') {
                continue;
            }

            const dueDate = new Date(task.due + "T23:59:59");
            if (dueDate <= today) {

                let assigneeName = "Unassigned";
                for (let j = 0; j < this.people.length; j++) {
                    if (this.people[j].id === task.assigneeId) {
                        assigneeName = this.people[j].name;
                        break;
                    }
                }

                result.push({
                    id: task.id,
                    title: task.title,
                    assigneeName: assigneeName,
                    due: task.due
                });
            }
        }

        return result;
    }

    //5
    getWorkloadCapacity() {
        const sprintsInWeek = 5;

        const workLoads = {};

        for (const person of this.people) {
            workLoads[person.id] = 0;
        }
        workLoads["unassigned"] = 0;

        for (const task of this.todos) {
            if (task.status.toLowerCase() === "done") {
                continue;
            }

            let assigneeId;
            if (task.assigneeId) {
                assigneeId = task.assigneeId;
            } else {
                assigneeId = "unassigned";
            }

            if (workLoads[assigneeId] === undefined) {
                workLoads[assigneeId] = 0;
            }

            workLoads[assigneeId] = workLoads[assigneeId] + task.estimateHrs;
        }

        const results = [];

        for (const person of this.people) {
            const capacity = person.capacityHrsPerDay * sprintsInWeek;
            const workload = workLoads[person.id] || 0;

            if (workload <= capacity) {
                results.push(person.name + ' → OK');
            } else {
                results.push(
                    person.name + ' → OVER-ALLOCATED by' + (workload - capacity) + 'hrs');
            }
        }

        return results;
    }

    //6
    FindTasksDependsOnNonExistents() {

        const validTaskIds = [];
        for (let i = 0; i < this.todos.length; i++) {
            validTaskIds.push(this.todos[i].id);
        }

        const result = [];
        for (let i = 0; i < this.todos.length; i++) {
            const task = this.todos[i];

            if (task.dependsOn && Array.isArray(task.dependsOn)) {
                for (let j = 0; j < task.dependsOn.length; j++) {
                    const depId = task.dependsOn[j];

                    let exists = false;
                    for (let k = 0; k < validTaskIds.length; k++) {
                        if (depId === validTaskIds[k]) {
                            exists = true;
                            break;
                        }
                    }

                    if (!exists) {
                        result.push({
                            id: task.id,
                            title: task.title,
                            dependsOn: task.dependsOn
                        });
                        break;
                    }
                }
            }
        }

        return result;
    }

    //7  
    findSharedTitles() {

        const titleWithIds = {};

        for (let i = 0; i < this.todos.length; i++) {
            const taskId = this.todos[i].id;
            const title = this.todos[i].title;
            titleWithIds[title] = [taskId];

            for (let j = 0; j < this.todos.length; j++) {

                if (this.todos[j].title.trim('').replace(/\s+/g, ' ').toLowerCase()
                    === title.trim(' ').replace(/\s+/g, ' ').toLowerCase()
                    && this.todos[j].id !== taskId) {
                    titleWithIds[title].push(this.todos[j].id)

                }
            }
        }
        const sharedTitles = {};
        for (const key of Object.keys(titleWithIds)) {
            const value = titleWithIds[key];

            if (value.length > 1) {
                sharedTitles[key] = value;
            }
        }
        return sharedTitles;
    }

    findPriority() {
        const priorityRank = {
            high: 3,
            medium: 2,
            low: 1
        };

        const capacityById = {};
        for (let p of this.people) {
            capacityById[p.id] = p.capacityHrsPerDay;
        }

        const statusById = {};
        for (let task of this.todos) {
            statusById[task.id] = task.status;
        }

        const today = new Date("2025-09-15");

        const readyTasks = this.todos.filter(task => {
            if (task.status === "done" || task.status === "blocked") return false;

            const dueDate = new Date(task.due);
            if (dueDate <= today) return false;

            let deps;
            if (task.dependsOn) {
                deps = task.dependsOn;
            } else {
                deps = [];
            }
            for (let depId of deps) {
                if (!(depId in statusById) || statusById[depId] !== "done") {
                    return false;
                }
            }

            if (task.assigneeId && capacityById[task.assigneeId] === 0) {
                return false;
            }

            return true;
        });

        readyTasks.sort((a, b) => {
            const p1 = priorityRank[a.priority];
            const p2 = priorityRank[b.priority];

            if (p1 !== p2) return p2 - p1;

            const d1 = new Date(a.due);
            const d2 = new Date(b.due);
            if (d1.getTime() !== d2.getTime()) return d1 - d2;

            return a.estimateHrs - b.estimateHrs;
        });

        return readyTasks.map(task => task.id);

    }

    //9
    reassignment() {
        const personHrsDetails = {};

        for (const person of this.people) {
            personHrsDetails[person.id] = {
                name: person.name,
                capacity: person.capacityHrsPerDay * 5,
                currentLoad: 0
            };
        }

        for (const eachTasks of this.todos) {
            if (eachTasks.status === "done") continue;
            if (!eachTasks.assigneeId) continue;

            if (personHrsDetails[eachTasks.assigneeId]) {
                personHrsDetails[eachTasks.assigneeId].currentLoad += eachTasks.estimateHrs;
            }
        }

        const availablePeople = [];
        for (const id in personHrsDetails) {
            const person = personHrsDetails[id];
            const available = person.capacity - person.currentLoad;
            if (available > 0) {
                availablePeople.push({ id, name: person.name, available });
            }
        }

        const result = [];
        for (const eachTasks of this.todos) {
            if (eachTasks.status === "done") {
                continue;
            }
            const assigneeId = eachTasks.assigneeId;
            if (!assigneeId) {
                continue;
            }

            const person = personHrsDetails[assigneeId];
            if (person && person.capacity === 0) {
                for (const availablePerson of availablePeople) {
                    if (availablePerson.available >= eachTasks.estimateHrs) {
                        result.push({
                            todoId: eachTasks.id,
                            fromPerson: person.name,
                            toPersonSuggested: availablePerson.name
                        });
                        availablePerson.available -= eachTasks.estimateHrs;
                        break;
                    }
                }
            }
        } return result;
    }
}


const obj = new TodosDetails(people, todos);

console.log(obj.detectDependency());                        //10
// console.log(obj.findTasksPriority());                      //1
// console.log(obj.printEmail());                            //2
// console.log(obj.getTotalEstimatedHours());               //3
// console.log(obj.findDueEndedTasks());                   //4
// console.log(obj.getWorkloadCapacity());                //5
// console.log(obj.FindTasksDependsOnNonExistents())     //6
// console.log(obj.findSharedTitles());                 //7
// console.log(obj.findPriority());                    //8
// console.log(obj.reassignment());                   //9

