import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const email = control.value;
  // Ajoutez votre logique de validation personnalisée ici
  // Exemple : Vérifier si l'adresse email se termine par "@wilder.school"

  const errors = {
    email: {
      rules: 'must end with "wilder.school"',
    },
  };

  const valid = email.endsWith('@wilder.school');

  return !valid ? errors : null;
}
