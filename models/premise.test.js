import Premise from './premise';

describe('premise', () => {
    let premise;
    let options;
    let OPTION_SPECIFIC_ROOTS = 'OPTION_SPECIFIC_ROOTS';

    beforeEach(() => {
        options = {
            [OPTION_SPECIFIC_ROOTS]: OPTION_SPECIFIC_ROOTS
        };

        premise = Premise(options);
    });

    it('should consists addition properties from passed options', () => {
        expect(premise[OPTION_SPECIFIC_ROOTS]).toBe(OPTION_SPECIFIC_ROOTS)
    });

    describe('#getPropositionForm', () => {
        it('should key of form based on passed propositions', () => {
            let FORM_PROPOSITION = 'A';
            let proposition = {
                universal: true,
                affirmative: true,
            };

            expect(Premise.getPropositionForm(proposition)).toBe(FORM_PROPOSITION);
        });

        it('should return undefined if proposition params are not matched on existed', () => {
            let proposition = {};

            expect(Premise.getPropositionForm(proposition)).toBeUndefined();
        });
    })
});