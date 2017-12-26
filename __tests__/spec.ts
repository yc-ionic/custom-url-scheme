import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { CustomUrlScheme, CustomUrlSchemeModule } from '../src/';

declare const window: { handleOpenURL: (url: string) => void };

describe('CustomUrlScheme', () => {
  let cus: CustomUrlScheme;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomUrlSchemeModule.forRoot()
      ]
    });
    injector = getTestBed();
    cus = injector.get(CustomUrlScheme);
  });

  it('Should be defined', () => {
    expect(cus).toBeDefined();
  });

  it('Should add a scheme', fakeAsync(() => {
    let counter = 0;
    cus.add('ok')
      .subscribe(x => {
        counter ++;
        expect(x).toMatchObject({
          scheme: 'ok',
          path: 'hello',
          query: {
            to: 'world',
          },
        });
      });
    tick();
    window.handleOpenURL('ok://hello?to=world');
    tick();
    expect(counter).toBe(1);
    window.handleOpenURL('ok://hello?to=world');
    tick();
    expect(counter).toBe(2);
    window.handleOpenURL('nope://hello?to=world');
    tick();
    expect(counter).toBe(2);
  }));
});
