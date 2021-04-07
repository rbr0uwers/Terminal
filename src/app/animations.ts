import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const topBottomAnimation =
    trigger('routeAnimations', [
        transition("* <=> bioPage", [     
            query(':leave', style({ display:  "none"}), {optional: true}), 
            // TODO: Find better selector ':enter' is not working with stagger and '*' queries ':leave' as well 
            query('*', [
                style({ opacity: 0 }), stagger(10, [
                    animate(1, style({ opacity: 1 }))
                ])
            ])      
        ]),
        transition("* <=> aboutPage", [     
            query(':leave', style({ display:  "none"}), {optional: true}),  
            query('*', [
                style({ opacity: 0 }), stagger(10, [
                    animate(1, style({ opacity: 1 }))
                ])
            ])      
        ])
    ])

export const blink = 
    trigger('blink', [
        state('inactive', style({ opacity: 0 })),
        state('active', style({ opacity: 1 })),
        transition('* <=> *', [
            animate("0.2s 0.5s")
        ])
    ]);

