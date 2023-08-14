//Variables:
    //n --> len
    //ca --> variable to count 'a'
    //cb --> variable to count 'b'
    //cc --> variable to count 'c'
    //cd --> variable to count 'd'
    //ce --> variable to count 'e'
    //cf --> variable to count 'f'
    //cg --> variable to count 'g'
    //ch --> variable to count 'h'
    //ci --> variable to count 'i'
    //cj --> variable to count 'j'
    //ck --> variable to count 'k'
    //cl --> variable to count 'l'
    //cm --> variable to count 'm'
    //cn --> variable to count 'n'
    //co --> variable to count 'o'
    //cp --> variable to count 'p'
    //cq --> variable to count 'q'
    //cr --> variable to count 'r'
    //cs --> variable to count 's'
    //ct --> variable to count 't'
    //cu --> variable to count 'u'
    //cv --> variable to count 'v'
    //cw --> variable to count 'w'
    //cx --> variable to count 'x'
    //cy --> variable to count 'y'
    //cz --> variable to count 'z'
//Logic:
    //We need even pair of each character present in string.
    //If length is odd then it would not satisfy our criteria. you can include this validation.
    //If length is even then we should count the frequency of each character.
    //If any character comes odd times it would not satisfy our criteria
    //Note:In anyanother program you can use unsigned int for assigning array size but for this problem you can't so I've initialised string array as s[1000]
#include <stdio.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int n;
        scanf("%d",&n);
        char s[1000];
        scanf("%s",s);
        int ca=0,cb=0,cc=0,cd=0,ce=0,cf=0,cg=0,ch=0,ci=0,cj=0,ck=0,cl=0,cm=0,cn=0,co=0,cp=0,cq=0,cr=0,cs=0,ct=0,cu=0,cv=0,cw=0,cx=0,cy=0,cz=0;
        for(int j=0;j<n;j++)
        {
            switch(s[j])
            {
                case 'a':
                    ca++;
                    break;
                case 'b':
                    cb++;
                    break;
                case 'c':
                    cc++;
                    break;
                case 'd':
                    cd++;
                    break;
                case 'e':
                    ce++;
                    break;
                case 'f':
                    cf++;
                    break;
                case 'g':
                    cg++;
                    break;
                case 'h':
                    ch++;
                    break;
                case 'i':
                    ci++;
                    break;
                case 'j':
                    cj++;
                    break;
                case 'k':
                    ck++;
                    break;
                case 'l':
                    cl++;
                    break;
                case 'm':
                    cm++;
                    break;
                case 'n':
                    cn++;
                    break;
                case 'o':
                    co++;
                    break;
                case 'p':
                    cp++;
                    break;
                case 'q':
                    cq++;
                    break;
                case 'r':
                    cr++;
                    break;
                case 's':
                    cs++;
                    break;
                case 't':
                    ct++;
                    break;
                case 'u':
                    cu++;
                    break;
                case 'v':
                    cv++;
                    break;
                case 'w':
                    cw++;
                    break;
                case 'x':
                    cx++;
                    break;
                case 'y':
                    cy++;
                    break;
                case 'z':
                    cz++;
                    break;
            }
        }
        if( (ca%2!=0) || (cb%2!=0) || (cc%2!=0) || (cd%2!=0) || (ce%2!=0) || (cf%2!=0) || (cg%2!=0) || (ch%2!=0) || (ci%2!=0) || (cj%2!=0) || (ck%2!=0) || (cl%2!=0) || (cm%2!=0) || (cn%2!=0) || (co%2!=0) || (cp%2!=0) || (cq%2!=0) || (cr%2!=0) || (cs%2!=0) || (ct%2!=0) || (cu%2!=0) || (cv%2!=0) || (cw%2!=0) || (cx%2!=0) || (cy%2!=0) || (cz%2!=0) )
        {
            printf("NO\n");
        }
        else
        {
            printf("YES\n");
        }
    }
    return 0;
}