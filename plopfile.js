export default function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        // Path for the new file
        path: 'src/components/{{componentName}}/{{componentName}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.test.tsx',
        templateFile: 'plop-templates/Component.test.tsx.hbs',
      },
    ],
  });
}
